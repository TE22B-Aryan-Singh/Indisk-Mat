document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    let shoppingCart = [];

    const products = [
        { id: 1, name: 'Indisk Dhaal', price: 150 },
        { id: 2, name: 'Tikka Masala', price: 150 },
        { id: 3, name: 'Saag Paneer', price: 150 },
        { id: 4, name: 'Naanbröd', price: 150 },
        { id: 5, name: 'Speciall Buffe', price: 150 },
        { id: 6, name: 'Kolfi', price: 150 },
        { id: 7, name: 'Butter Chicken', price: 150 },
        { id: 8, name: 'Samosa', price: 150 },
        { id: 9, name: 'Kheer', price: 150 },
        { id: 10, name: 'Coca Cola', price: 150 },
        { id: 11, name: 'Fanta', price: 150 },
        { id: 12, name: 'Chicken Biryani', price: 150 },
    ];

    function addToCart(productId) {
        let product = {
            id: productId,
            name: getProductName(productId),
            price: getProductPrice(productId)
        };

        shoppingCart.push(product);
        localStorage.setItem('cart', JSON.stringify(shoppingCart));
        updateCartUI();
    }

    function removeFromCart(productId) {
        const index = shoppingCart.findIndex(product => product.id === productId);
        if (index !== -1) {
            shoppingCart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
            updateCartUI();
        }
    }

    function getProductName(productId) {
        const product = products.find(product => product.id == productId);
        return product ? product.name : '';
    }

    function getProductPrice(productId) {
        const product = products.find(product => product.id == productId);
        return product ? product.price : 150;
    }

    function updateCartUI() {
        cartItemsContainer.innerHTML = '';

        shoppingCart.forEach(product => {
            let itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            itemElement.textContent = `${product.name} - ${product.price}Kr`;

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Ta bort';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function () {
                removeFromCart(product.id);
            });

            itemElement.appendChild(removeButton);
            cartItemsContainer.appendChild(itemElement);
        });

        let totalPrice = shoppingCart.reduce((total, product) => total + product.price, 0);
        totalPriceElement.textContent = `Totalt: ${totalPrice}Kr`;

        let totalQuantity = shoppingCart.length;
        totalQuantityElement.textContent = totalQuantity;
    }

    let addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            let productId = event.target.getAttribute('data-product-id');
            addToCart(productId);
        });
    });

    try {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        shoppingCart = storedCart;
        updateCartUI();
    } catch (error) {
        console.error('Ett fel inträffade:', error);
    }
});
