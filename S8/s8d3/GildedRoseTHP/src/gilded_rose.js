import { updateInfos } from "./items";

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => {
      updateInfos(item);
    });
    return this.items;
  }
}
module.exports = {
  Shop
};
