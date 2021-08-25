import { isOutdated } from "./generalItemsSpec";

export const isSpecial = (item) => {
  return (
    item.name === "Aged Brie" ||
    item.name === "Backstage passes to a TAFKAL80ETC concert"
  );
};

export const isConcert = (item) => item.name == "Backstage passes to a TAFKAL80ETC concert"? true : false;

export const handleConcertParticularity= (item, quality) => {
  if (!isOutdated(item) && item.sellIn <= 5) quality += 2;
  else if (item.sellIn > 5 && item.sellIn <= 10) quality += 1;
  else if (isOutdated(item)) quality = 0;
  return quality;
}