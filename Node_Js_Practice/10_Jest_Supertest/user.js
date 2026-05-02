function createProfile(name, role) {
    return {
        name: name,
        role: role,
        isActive: true,
        skills: ['Node.js', 'Angular', 'TypeScript']
    };
}

module.exports = { createProfile };