import { Shop } from '../src/gilded_rose.js'
import { Item } from '../src/items'

describe("GildedRose shop manager", function () {
  let listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(Item("+5 Dexterity Vest", 10, 20));
    listItems.push(Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(Item("Aged Brie", 20, 30));
    listItems.push(Item("Backstage passes to a TAFKAL80ETC concert", 20, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });


  it("Limiter l'augmentation de la qualité d'un produit à 50.", function() {

    listItems.push(Item("Aged Brie", 20, 50));
    listItems.push(Item("Backstage passes to a TAFKAL80ETC concert", 20, 50));

    const gildedRose = new Shop (listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 19, quality: 50},
      { sellIn: 19, quality: 50}
    ]

    expected.forEach(function (testCase, idx) {
      expect(items[idx].sellIn).toBe(testCase.sellIn);
      expect(items[idx].quality).toBe(testCase.quality);
      
    });
  });


  it ("Empêcher que la qualité ait une valeur négative", function () {
    listItems.push(Item("Mana Cake",10,0));
    listItems.push(Item("Extra Drink",20,0));

    const gildedRose = new Shop (listItems)
    const items = gildedRose.updateQuality()

    const expected = [
      {sellIn: 9, quality: 0},
      {sellIn: 19, quality: 0}
    ]

    expected.forEach(function (testCase, idx){
      expect(items[idx].quality).toBe(testCase.quality)
      expect(items[idx].sellIn).toBe(testCase.sellIn)
    })

  })

  it("Diminuer la qualité des items deux fois plus rapidement quand le SellIn est à Zéro", function() {
    listItems.push(Item("ManaCake", 0, 10));
    listItems.push(Item("Other stuff", 2, 20));

    const gildedRose = new Shop (listItems)
    const items = gildedRose.updateQuality()

    const expected = [
      {sellIn:-1, quality: 8},
      {sellIn:1, quality: 19}
    ]

    expected.forEach(function (testCase, idx){
      expect(items[idx].quality).toBe(testCase.quality)
      expect(items[idx].sellIn).toBe(testCase.sellIn)
    })
  })

  it("Diminuer la qualité de BackStage passes à zéro lorsque le Sellin <= 0 ", function() {
    listItems.push(Item ("Backstage passes to a TAFKAL80ETC concert", 0, 40));
    listItems.push(Item ("Backstage passes to a TAFKAL80ETC concert", 0, 20));
    const gildedRose = new Shop (listItems)
    const items = gildedRose.updateQuality()

    const expected = [
      {sellIn: -1, quality: 0},
      {sellIn: -1, quality: 0}
    ]

    expected.forEach(function (testCase, idx){
      expect(items[idx].quality).toBe(testCase.quality)
      expect(items[idx].sellIn).toBe(testCase.sellIn)
    })

  })

  it("Augmenter la qualité de BackStage passes de 2 lorsque le 5< SellIn <= 10 ", function(){
    listItems.push(Item ("Backstage passes to a TAFKAL80ETC concert", 9, 40));
    listItems.push(Item ("Backstage passes to a TAFKAL80ETC concert", 7, 20));
    const gildedRose = new Shop (listItems)
    const items = gildedRose.updateQuality()

    const expected = [
      {sellIn: 8, quality: 42},
      {sellIn: 6, quality: 22}
    ]

    expected.forEach(function (testCase, idx){
      expect(items[idx].quality).toBe(testCase.quality)
      expect(items[idx].sellIn).toBe(testCase.sellIn)
    })
  })

  it("Augmenter la qualité de BackStage passes de 3 lorsque le SellIn <= 5 ", function(){
    listItems.push(Item ("Backstage passes to a TAFKAL80ETC concert", 5, 40));
    listItems.push(Item ("Backstage passes to a TAFKAL80ETC concert", 2, 20));
    const gildedRose = new Shop (listItems)
    const items = gildedRose.updateQuality()

    const expected = [
      {sellIn: 4, quality: 43},
      {sellIn: 1, quality: 23}
    ]

    expected.forEach(function (testCase, idx){
      expect(items[idx].quality).toBe(testCase.quality)
      expect(items[idx].sellIn).toBe(testCase.sellIn)
    })
  })

  it("Diminuer la qualité des items Conjured deux fois plus vite que les autres items normaux", function() {

    listItems.push(Item ("Conjured item", 10, 20));
    listItems.push(Item ("Regular Item", 10, 20));
    listItems.push(Item ("Conjured item", 0, 20));
    listItems.push(Item ("Regular Item", 0, 20));
    const gildedRose = new Shop (listItems)
    const items = gildedRose.updateQuality()
    
    const expected = [
      {sellIn: 9,  quality: 18},
      {sellIn: 9,  quality: 19},
      {sellIn: -1, quality: 16},
      {sellIn: -1, quality: 18}
    ]

    expected.forEach(function(testCase, idx){
      expect(items[idx].quality).toBe(testCase.quality)
      expect(items[idx].sellIn).toBe(testCase.sellIn)
    })
  })

  it("La qualité de Sulfura est constante ", function() {
    listItems.push(Item('Sulfuras, Hand of Ragnaros', 10, 80))
    listItems.push(Item('Sulfuras, Hand of Ragnaros', 0, 80))
    
    const gildedRose = new Shop (listItems)
    const items = gildedRose.updateQuality()

    const expected = [
      {sellIn: 10, quality: 80},
      {sellIn: 0, quality: 80}
    ]


    expected.forEach(function(testCase, idx){
      expect(items[idx].quality).toBe(testCase.quality)
      expect(items[idx].sellIn).toBe(testCase.sellIn)
    })
  })

})





