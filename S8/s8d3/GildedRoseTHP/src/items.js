import {updateSellInOf} from './updateSellIn'
import {updateQualityOf} from './updateQuality'

class Item {
  
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateInfos() {
    updateSellInOf(this);
    updateQualityOf(this);
    return this;
  }
}

module.exports = {
  Item
};