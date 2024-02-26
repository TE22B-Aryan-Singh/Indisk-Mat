document.addEventListener('DOMContentLoaded', function() {

    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');


    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];


        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.textContent = `Produkt ${item.productId}`;
            cartItemsContainer.appendChild(cartItemDiv);
        });


        const totalPrice = cart.length * 150;
        totalPriceElement.textContent = `Totalt: ${totalPrice}Kr`;
    } catch (error) {
        console.error('Ett fel inträffade:', error);
    }
});
