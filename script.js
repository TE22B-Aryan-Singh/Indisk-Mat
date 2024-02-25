<script>
    function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartQuantity(cart.length);
    }
    
    function updateCartQuantity(quantity) {
    const totalQuantityElement = document.querySelector('.totalQuantity');
    totalQuantityElement.textContent = quantity;
    }
</script>