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

const updateSellInOf = (item) => {
  return isLegendary(item)
    ? (item.sellIn = item.sellIn)
    : (item.sellIn = item.sellIn - 1);
};

const updateQualityOf = (item) => {
  if (isLegendary(item)) item.quality = item.quality;
  else if (isOutdated(item)) {
    if (isSpecial(item)) item.quality = item.quality - 2;
    else if (isConjured(item)) item.quality = item.quality - 4;
    else item.quality = item.quality - 2;
  }else {
    if (isSpecial(item)) item.quality = item.quality + 1;
    else if (isConjured(item)) item.quality = item.quality - 2;
    else item.quality = item.quality - 1;
  }

  if (item.quality < 0) item.quality = 0;
  if (item.quality > 50 && !isLegendary(item)) item.quality = 50;

  if (isConcert(item) && item.sellIn > 0 && item.sellIn <= 5)
    item.quality = item.quality + 2;
  if (isConcert(item) && item.sellIn > 5 && item.sellIn <= 10)
    item.quality = item.quality + 1;
  if (isConcert(item) && item.sellIn <= 0) item.quality = 0;

  return item.quality;
};

const isSpecial = (item) => {
  return item.name === "Aged Brie" ||
    item.name === "Backstage passes to a TAFKAL80ETC concert";
};

const isLegendary = (item) => {
  return item.name === "Sulfuras, Hand of Ragnaros";
};

const isConjured = (item) => {
  const conjuredItem = new RegExp("\\Conjured\\b");
  return item.name.match(conjuredItem);
};

const isConcert = (item) => {
  return item.name == "Backstage passes to a TAFKAL80ETC concert"
    ? true
    : false;
};

const isOutdated = (item) => {
  return item.sellIn <= 0
};

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
  Item,
  Shop,
};
