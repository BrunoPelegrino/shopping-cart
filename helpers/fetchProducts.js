const fetchProducts = async (item) => {
  const url = (`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
  const computer = await fetch(url)
  .then((result) => result.json())
  .then((resultJson) => resultJson.result)
  .catch((error) => error);
  return computer;
}; 
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
