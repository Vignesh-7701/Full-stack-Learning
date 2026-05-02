const db = require('./database');

async function registerNewUser(username) {
    // 1. Check for missing data
    if (!username) {
        throw new Error("Username is required");
    }

    // 2. Format the user data
    const newUser = {
        username: username.toLowerCase(),
        createdAt: new Date().toISOString(),
        isActive: true
    };

    // 3. Call the database to save it
    const savedUser = await db.saveUser(newUser);

    // 4. Return the final result
    return savedUser;
}

module.exports = { registerNewUser };