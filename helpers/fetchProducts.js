const fetchProducts = async () => {
  const url = ('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  const computer = await fetch(url)
  .then((result) => result.json())
  .then((resultJson) => resultJson.results)
  .catch((error) => console.log(error));
  return computer;
}; fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
