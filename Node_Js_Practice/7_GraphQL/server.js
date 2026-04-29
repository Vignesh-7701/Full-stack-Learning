const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const authors = [
	{ id: 1, name: 'J. K. Rowling' },
	{ id: 2, name: 'J. R. R. Tolkien' },
	{ id: 3, name: 'Brent Weeks' }
];

const books = [
	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
	{ id: 3, name: 'The Fellowship of the Ring', authorId: 2 },
	{ id: 4, name: 'The Two Towers', authorId: 2 },
	{ id: 5, name: 'The Return of the King', authorId: 2 },
	{ id: 6, name: 'The Way of Shadows', authorId: 3 },
	{ id: 7, name: 'Beyond the Shadows', authorId: 3 }
];

const app = express();

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },

    // --- NEW RELATIONAL FIELD ---
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        // 'parent' is the Book object. We use its authorId to find the Author.
        return authors.find(author => author.id === parent.authorId);
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author of a book',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },

    // --- NEW RELATIONAL FIELD ---
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        // 'parent' is the Author object. We filter the books array for matches.
        return books.filter(book => book.authorId === parent.id);
      }
    }
  })
});

// Represents the immediate "Receipt" we give back to the client
const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: 'An asynchronous background task',
  fields: () => ({
    taskId: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    message: { type: GraphQLString }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    // 1. Fetch ALL Books
    books: {
      type: new GraphQLList(BookType), // Notice it's a List of BookTypes
      description: 'List of All Books',
      resolve: () => books // Simply returns our mock array
    },
    // 2. Fetch a SINGLE Book by ID
    book: {
      type: BookType, // Notice it's just one BookType, not a list
      description: 'A Single Book',
      args: {
        id: { type: GraphQLInt } // We expect the user to pass an ID argument
      },
      resolve: (parent, args) => books.find(book => book.id === args.id) // The logic to find the specific book
    },

    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of All Authors',
      resolve: () => authors // Returns the mock authors array
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => authors.find(author => author.id === args.id)
    }
  })
});


const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    // 1. ADD AN AUTHOR
    addAuthor: {
      type: AuthorType, // We return the Author object after it is successfully created
      description: 'Add a new author',
      args: {
        // We only need the user to provide a name. We will auto-generate the ID.
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        // Create the new author object
        const newAuthor = {
          id: authors.length + 1, // Simple auto-increment logic for our mock array
          name: args.name
        };
        // Save it to our "database"
        authors.push(newAuthor);
        // Return the newly created author so the frontend can immediately use it
        return newAuthor; 
      }
    },
    addBook: {
      type: BookType, // We return the Book object after creation
      description: 'Add a new book',
      args: {
        // Enforcing that both of these fields MUST be provided
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => {
        const newBook = {
          id: books.length + 1,
          name: args.name,
          authorId: args.authorId
        };
        books.push(newBook);
        return newBook;
      }
    },
    submitTask: {
      type: TaskType,
      description: 'Submit a heavy task to be processed in the background',
      args: {
        taskName: { type: new GraphQLNonNull(GraphQLString) },
        webhookUrl: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        // 1. Generate a mock unique ID for this job
        const jobId = `job_${Math.floor(Math.random() * 100000)}`;
        console.log(`\n[Task Received] Job ID: ${jobId}`);
        console.log(`[Task Received] Task: ${args.taskName}`);

        // 2. THE BACKGROUND WORKER (Simulating a heavy CPU task)
        // We use setTimeout to simulate 5 seconds of heavy processing.
        setTimeout(async () => {
          console.log(`[Processing] Job ${jobId} finished! Sending webhook...`);
          
          // The exact data we want to send back to Server A when we finish
          const finishedData = {
            id: jobId,
            task: args.taskName,
            status: 'COMPLETED',
            result: 'Here is your highly processed data payload!'
          };

          try {
            // 3. THE WEBHOOK DISPATCH (Server-to-Server POST Request)
            await fetch(args.webhookUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(finishedData)
            });
            console.log(`[Success] Webhook delivered to ${args.webhookUrl}`);
          } catch (error) {
            console.error(`[Error] Failed to send webhook:`, error.message);
          }
        }, 5000); // 5000ms = 5 seconds

        // 4. THE IMMEDIATE RESPONSE (The 202 Accepted Pattern)
        // This executes instantly, freeing up the client's connection!
        return {
          taskId: jobId,
          status: "PENDING",
          message: "Task successfully queued. Results will be sent in 5 seconds."
        };
      }
    }
  })
});


// Finally, update the schema to use this new RootQueryType
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});


// 2. MOUNT THE MIDDLEWARE
// We route all traffic hitting '/graphql' to the graphqlHTTP function.
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true // CRITICAL: This turns on the browser-based testing UI
}));

// 3. START THE SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});