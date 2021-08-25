class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      item.updateInfos();
    });
    return this.items;
  }
}
module.exports = {
  Shop
};
