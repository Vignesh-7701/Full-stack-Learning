// payment.test.js

// 1. I must import my tools manually
const expect = require('chai').expect; // My assertion library
const sinon = require('sinon');        // My mocking library

// 2. Import the code I am testing
const { processPayment, db } = require('./payment');

// Mocha provides 'describe' and 'it' (Mocha uses 'it' instead of 'test')
describe('processPayment function', () => {

    // I need to clean up my mocks after every test
    afterEach(() => {
        sinon.restore(); 
    });

    it('should calculate the total and call the database', async () => {
        
        // 3. SETUP THE MOCK WITH SINON
        // I tell Sinon: "Take the 'db' object, and replace 'saveTransaction' with a stunt double."
        const dbMock = sinon.stub(db, 'saveTransaction').resolves(true);

        // 4. EXECUTE
        const result = await processPayment(100, 20);

        // 5. ASSERTIONS WITH CHAI
        // Chai reads very much like plain English
        expect(result).to.equal(120);
        
        // 6. CHECK THE MOCK
        // I verify the stunt double was called exactly once with the number 120
        expect(dbMock.calledOnce).to.be.true;
        expect(dbMock.calledWith(120)).to.be.true;
    });

    it('should throw an error for negative prices', async () => {
        
        // Testing errors in Mocha/Chai requires wrapping the function execution
        try {
            await processPayment(-50, 10);
        } catch (error) {
            expect(error.message).to.equal("Price cannot be negative");
        }
    });
});