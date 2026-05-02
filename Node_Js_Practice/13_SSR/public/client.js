// 1. Wait for the browser to finish painting the server's HTML onto the screen
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded. Starting hydration process...");

    // 2. Find ALL the resolve buttons the server rendered
    const resolveButtons = document.querySelectorAll('.resolve-btn');

    // 3. Loop over them and attach the interactivity
    resolveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            
            // Find the specific list item that contains the button we clicked
            const listItem = event.target.closest('.log-item');
            
            // Modify the DOM (Visual Hydration)
            listItem.style.opacity = '0.5';
            listItem.style.textDecoration = 'line-through';
            
            // Update the button state
            event.target.innerText = "Resolved ✓";
            event.target.disabled = true;
            event.target.style.backgroundColor = "#4dabf7";
            
            console.log("Log resolved successfully via Client JS.");
        });
    });

    console.log(`Hydration complete. Attached listeners to ${resolveButtons.length} buttons.`);
});