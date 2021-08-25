export const isMinValueOf = (quality) => quality < 0;
export const isMaxValueOf = (quality) => quality > 50;
export const isOutdated = (item) => item.sellIn <= 0;