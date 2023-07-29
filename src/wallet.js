export default class Wallet {
  constructor() {
    this.coins = [];
  }

  addCoin(coin) {
    this.coins.push(coin);
  }

  getBalance() {
    return this.coins.reduce((total, current) => {
      return total + current.getValue();
    }, 0);
  }
}
