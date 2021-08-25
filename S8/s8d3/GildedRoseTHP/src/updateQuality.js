import {isConjured, getConjuredDeprecation} from './updateConjuredItems'
import {isLegendary, isNotLegendary} from './updateLegendaryItems'
import {isSpecial,isConcert,handleConcertParticularity} from './updateSpecialItems'
import {isOutdated,isMinValueOf,isMaxValueOf} from './generalItemsSpec';


export const updateQualityOf = (item) => {
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

