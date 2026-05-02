const { fetchUserData } = require('./db');

describe('fetchUserData async function', () => {

    // Notice the 'async' keyword before the callback arrow function
    test('should fetch data for a valid user ID', async () => {
        
        // We 'await' the promise to resolve before checking the result
        const data = await fetchUserData(1);
        
        expect(data).toEqual({ id: 1, username: 'dev_vignesh' });
    });

    test('should throw an error for an invalid user ID', async () => {
        
        // Testing an expected failure (like a 404 Not Found)
        // We use .rejects to tell Jest we EXPECT this promise to fail
        await expect(fetchUserData(99)).rejects.toThrow('User not found in database');
    });
});