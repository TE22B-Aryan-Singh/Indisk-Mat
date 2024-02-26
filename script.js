document.addEventListener('DOMContentLoaded', function() {
    // Hämta kundvagnsdiven
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Försök att hämta produkter från lokal lagring
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Visa produkter i kundvagnen
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.textContent = `Produkt ${item.productId}`;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        // Beräkna totalpris
        const totalPrice = cart.length * 150; // Anpassa detta beroende på din datastruktur
        totalPriceElement.textContent = `Totalt: ${totalPrice}Kr`;
    } catch (error) {
        console.error('Ett fel inträffade:', error);
    }
});
