export const getUserById = async (id: string) => {
    console.log(`[User Service] 🗄️ Querying database for user ID: ${id}`);
    
    // Simulating a database delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { id, name: 'Vignesh P.', role: 'Developer' };
};