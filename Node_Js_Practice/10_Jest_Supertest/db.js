function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, username: 'dev_vignesh' });
            } else {
                reject(new Error('User not found in database'));
            }
        }, 500);
    });
}

module.exports = { fetchUserData };