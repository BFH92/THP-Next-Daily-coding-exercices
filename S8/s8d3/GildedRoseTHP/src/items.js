import {updateSellInOf} from './updateSellIn'
import {updateQualityOf} from './updateQuality'

export const Item = (name,sellIn,quality) =>({name: name, sellIn: sellIn, quality:quality}) 
  
export const updateInfos = (item) => {
    updateSellInOf(item);
    updateQualityOf(item);
  return item
}


 