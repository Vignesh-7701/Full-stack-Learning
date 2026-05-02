const { calculateTotal, calculateDiscount } = require('./math');

// Group 1: Tests for calculateTotal
describe('calculateTotal function', () => {
    
    test('should accurately calculate the total with tax', () => {
        const result = calculateTotal(100, 0.10);
        expect(result).toBe(110);
    });

    // I can easily add more tests for just this function here
    test('should throw an error if price is negative', () => {
        expect(() => calculateTotal(-50, 0.10)).toThrow('Price cannot be negative');
    });
});

// Group 2: Tests for calculateDiscount
describe('calculateDiscount function', () => {
    
    test('should correctly subtract the discount from the price', () => {
        const result = calculateDiscount(100, 20);
        expect(result).toBe(80);
    });

    test('should handle a 0 discount', () => {
        const result = calculateDiscount(100, 0);
        expect(result).toBe(100);
    });
});