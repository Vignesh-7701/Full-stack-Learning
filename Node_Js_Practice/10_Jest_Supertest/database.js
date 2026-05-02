// Simulating a real database connection that takes 2 seconds
async function saveUser(userData) {
    console.log("🧨 WARNING: Connecting to the REAL database! Costing money!");
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Pretend the database assigns an ID of 99 upon saving
            resolve({ id: 99, ...userData });
        }, 2000); 
    });
}

module.exports = { saveUser };