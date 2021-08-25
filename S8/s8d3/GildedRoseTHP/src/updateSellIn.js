import {isLegendary} from'./updateLegendaryItems'
export const updateSellInOf = (item) => isLegendary(item) ? true : (item.sellIn -= 1);