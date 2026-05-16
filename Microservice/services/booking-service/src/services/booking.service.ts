export const getBookingById = async (id: string) => {
    console.log(`[Booking Service] 🎟️ Querying database for booking ID: ${id}`);
    
    // Simulating database latency
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return { 
        id, 
        event: 'Node.js Microservices Masterclass', 
        seat: 'A1',
        status: 'Confirmed' 
    };
};