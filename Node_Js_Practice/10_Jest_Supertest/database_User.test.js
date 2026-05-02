// userService.test.js
const { registerNewUser } = require('./database_User');
const db = require('./database');

// THE MOST IMPORTANT LINE: 
// This tells Jest to intercept ANY calls to './db' and replace them with fakes.
jest.mock('./database');

describe('registerNewUser function', () => {

    // Clear mocks before every test so they don't interfere with each other
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Scenario 1: Successfully registers a user', async () => {
        // 1. SETUP THE MOCK
        // We tell our fake DB: "When you are called, instantly return this object."
        const fakeDbResponse = { id: 99, username: 'vignesh', isActive: true };
        db.saveUser.mockResolvedValue(fakeDbResponse);

        // 2. EXECUTE THE FUNCTION
        const result = await registerNewUser('Vignesh');

        // 3. ASSERTIONS
        // Did it return what the "database" gave back?
        expect(result).toEqual(fakeDbResponse);
        
        // Did our function actually attempt to call the database?
        expect(db.saveUser).toHaveBeenCalledTimes(1);
        
        // Did it pass the correctly formatted data to the database? (Lowercase)
        expect(db.saveUser).toHaveBeenCalledWith(
            expect.objectContaining({
                username: 'vignesh',
                isActive: true
            })
        );
    });

    test('Scenario 2: Handles a database crash', async () => {
        // 1. SETUP THE MOCK TO FAIL
        // We tell our fake DB: "Pretend your server is down and throw an error."
        db.saveUser.mockRejectedValue(new Error('Database Connection Failed'));

        // 2 & 3. EXECUTE AND ASSERT
        // We expect the whole registerNewUser function to fail because the DB failed.
        await expect(registerNewUser('Vignesh')).rejects.toThrow('Database Connection Failed');
    });

    test('Scenario 3: Fails if username is missing without calling DB', async () => {
        // We pass empty string
        await expect(registerNewUser('')).rejects.toThrow('Username is required');

        // Crucial check: Because the username was missing, it should have failed 
        // BEFORE it ever tried to call the database.
        expect(db.saveUser).not.toHaveBeenCalled();
    });
});