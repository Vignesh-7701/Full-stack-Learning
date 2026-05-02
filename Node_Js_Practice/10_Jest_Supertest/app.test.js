const request = require('supertest');
const app = require('./app'); 
const db = require('./database'); 

jest.mock('./database');

describe('POST /api/users API Route', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should create a user and return a 201 status code', async () => {
        // Setup the database stunt double
        db.saveUser.mockResolvedValue({ id: 50, username: 'john_doe', isActive: true });

        // 2. USE SUPERTEST TO FAKE AN HTTP REQUEST
        // I pass my Express 'app' directly into Supertest's 'request'
        const response = await request(app)
            .post('/api/users')           // Hit the endpoint
            .send({ username: 'John' });  // Attach a JSON body

        // 3. ASSERTIONS ON THE HTTP RESPONSE
        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.id).toBe(50);
        
        // Verify my API actually talked to my mocked database
        expect(db.saveUser).toHaveBeenCalledTimes(1);
    });

    test('should return a 400 status if username is missing', async () => {
        // Send a request with an empty JSON body
        const response = await request(app)
            .post('/api/users')
            .send({}); // No username

        // 4. ASSERT EXPECTED API ERRORS
        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.error).toBe('Username is required');

        // Confirm the API stopped and didn't try to hit the DB
        expect(db.saveUser).not.toHaveBeenCalled();
    });
});