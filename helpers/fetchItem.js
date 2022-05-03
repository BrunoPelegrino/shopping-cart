const fetchItem = async (item) => {
  const url = (`https://api.mercadolibre.com/items/${item}`);
  const itemId = fetch(url)
  .then((result) => result.json())
  .catch((error) => console.log(error));
  return itemId;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
