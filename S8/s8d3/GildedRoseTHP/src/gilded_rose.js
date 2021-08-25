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
const updateSellInOf = (item) => isLegendary(item) ? true : (item.sellIn -= 1);
const updateQualityOf = (item) => {
  let quality = item.quality;
  if (isLegendary(item));
  else if (isOutdated(item)) {
    const value = 2;
    isConjured(item)? quality -= getConjuredDeprecation(value) : quality -= value
  } else {
    const value = 1;
    if (isSpecial(item)) quality += value;
    else isConjured(item)? 
      quality -= getConjuredDeprecation(value) :quality -= value;
  }
  if (isConcert(item)) quality = handleConcertParticularity(item, quality)
  if (isMinValueOf(quality)) quality = 0;
  if (isMaxValueOf(quality) && isNotLegendary(item)) quality = 50;
  return (item.quality = quality);
};
const getConjuredDeprecation = (value) => value = value * 2;
const handleConcertParticularity= (item, quality) => {
  if (!isOutdated(item) && item.sellIn <= 5) quality += 2;
  else if (item.sellIn > 5 && item.sellIn <= 10) quality += 1;
  else if (isOutdated(item)) quality = 0;
  return quality;
}
const isMinValueOf = (quality) => quality < 0;
const isMaxValueOf = (quality) => quality > 50;
const isSpecial = (item) => {
  return (
    item.name === "Aged Brie" ||
    item.name === "Backstage passes to a TAFKAL80ETC concert"
  );
};
const isLegendary = (item) => item.name === "Sulfuras, Hand of Ragnaros";
const isNotLegendary = (item) => item.name !== "Sulfuras, Hand of Ragnaros";
const isConjured = (item) => item.name.match("\\Conjured\\b");
const isConcert = (item) => item.name == "Backstage passes to a TAFKAL80ETC concert"? true : false;
const isOutdated = (item) => item.sellIn <= 0;


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
