function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  
  return li;
}

const itemFunc = async (e) => {
  const cartItems = document.querySelector('.cart__items');
  const products = await fetchItem(e.target.parentNode.firstChild.innerText);
    const addItem = createCartItemElement({
      sku: products.id,
      name: products.title,
      salePrice: products.price,
    });
    cartItems.appendChild(addItem);
};
const items = document.querySelector('.items');
const setComputer = async () => {
  const products = await fetchProducts();
  products
  .forEach((product) => {
    const newItem = createProductItemElement({
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    });
    items.appendChild(newItem);
    newItem.addEventListener('click', itemFunc);
  }); 
}; setComputer();

function empityCart() {
  const btn = document.querySelector('.empty-cart');
  const ol = document.querySelector('.cart__items');
  btn.addEventListener('click', () => {
    ol.innerHTML = '';
  });
} empityCart();

window.onload = () => {
};
