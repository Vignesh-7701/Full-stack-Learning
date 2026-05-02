const { createProfile } = require('./user');

describe('createProfile function', () => {
    
    test('should return a correctly formatted user object', () => {
        const profile = createProfile('Vignesh', 'Full Stack Developer');

        // 1. toEqual: Checks the actual values inside the object (Deep Equality)
        expect(profile).toEqual({
            name: 'Vignesh',
            role: 'Full Stack Developer',
            isActive: true,
            skills: ['Node.js', 'Angular', 'TypeScript']
        });

        // 2. toHaveProperty: Checks if a specific key exists, and optionally its value
        expect(profile).toHaveProperty('isActive', true);

        // 3. Truthiness: Checking boolean states
        expect(profile.isActive).toBeTruthy();

        // 4. toContain: Checks if an array contains a specific item
        expect(profile.skills).toContain('Node.js');
        
        // 5. Array Length: Checking the size of the array
        expect(profile.skills.length).toBe(3);
    });
});