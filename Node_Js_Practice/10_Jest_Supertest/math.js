function calculateTotal(price, taxRate) {
    if (price < 0) {
        throw new Error('Price cannot be negative');
    }
    return price + (price * taxRate);
}

function calculateDiscount(price, discountAmount) {
    if (discountAmount > price) throw new Error('Discount cannot be greater than price');
    return price - discountAmount;
}

// Exporting it so other files (like my test file) can use it
module.exports = { calculateTotal , calculateDiscount };