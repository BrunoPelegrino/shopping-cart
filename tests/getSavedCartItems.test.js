const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  beforeEach(() => {
    getSavedCartItems('<ol><li>Item</li></ol>');
  });
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado',() => {
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.',() => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems');
  });
});
