const currencyFormat = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

module.exports = class CurrencyManager {
  static format(value) {
    return currencyFormat.format(value);
  }
}
