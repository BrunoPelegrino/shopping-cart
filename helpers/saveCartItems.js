const saveCartItems = () => {
  const ol = document.querySelector('.cart__items');
  const saveValue = ol.innerHTML;
  localStorage.setItem('cartItems', saveValue);
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
