const saveCartItems = () => {
  const ol = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', ol.innerHTML);
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
