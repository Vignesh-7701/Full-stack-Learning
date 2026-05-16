// src/cart.js

export const renderCart = (containerId) => {
    const element = document.getElementById(containerId);
    
    if (element) {
        element.innerHTML = `
            <div style="border: 2px dashed #ff9900; padding: 10px; border-radius: 8px;">
                <h3>🛒 Remote Shopping Cart</h3>
                <ul>
                    <li>Vanilla JS Course - $0</li>
                    <li>MFE Architecture Guide - $0</li>
                </ul>
                <button onclick="alert('Checkout triggered!')">Checkout</button>
            </div>
        `;
    }
};