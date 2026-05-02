// payment.js

// A fake database function I want to mock later
const db = {
    saveTransaction: async (amount) => {
        console.log("🧨 REAL DB HIT: Saving $" + amount);
        return true;
    }
};

// The actual function I am testing
async function processPayment(price, tax) {
    if (price < 0) throw new Error("Price cannot be negative");
    
    const total = price + tax;
    
    // Call the database
    await db.saveTransaction(total);
    
    return total;
}

module.exports = { processPayment, db };