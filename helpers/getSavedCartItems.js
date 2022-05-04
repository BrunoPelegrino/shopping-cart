const getSavedCartItems = () => {
  const lista = document.querySelector('.cart__items');
  const ol = localStorage.getItem('cartItems');
  lista.innerHTML = ol;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
