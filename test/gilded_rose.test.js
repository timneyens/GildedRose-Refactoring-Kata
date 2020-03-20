const { Shop, Item } = require('../src/gilded_rose');

describe('Gilded Rose', function () {
  describe('Normal product', function () {
    it('should decrease a normal product in quality and sellin', () => {
      const gildedRose = new Shop([new Item('Milk', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(49);
      expect(items[0].sellIn).toBe(9);
    });

    it('should decrease quality twice as fast when sellIn passed', () => {
      const gildedRose = new Shop([new Item('Milk', 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(48);
      expect(items[0].sellIn).toBe(-1);
    });

    it('should decrease quality to minimum 0', () => {
      const gildedRose = new Shop([new Item('Milk', 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });
  });

  describe('Brie', function () {
    it('should increase quality twice as fast when aging for brie', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 10, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(41);
      expect(items[0].sellIn).toBe(9);
    });

    it('should increase quality to maximum 50', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    });
  });

  describe('Sulfuras', function () {
    it('should not update quality or sellin from Sulfuras', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(0);
    });
  });

  describe('Concert', function () {
    it('should increase quality with 2 when less than 10 days left until the concert', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(27);
      expect(items[0].sellIn).toBe(9);
    });

    it('should increase quality with 3 when less than 5 days left until the concert', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 25)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(28);
      expect(items[0].sellIn).toBe(4);
    });

    it('should set quality to 0 when concert passed ', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });
  });

  describe('Conjured', function () {
    it('should decrease quality twice as fast', () => {
      const gildedRose = new Shop([new Item('Conjured', 10, 25)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(23);
      expect(items[0].sellIn).toBe(9);
    });
  });

  describe('Mix', function () {
    it('should decrease the sellIn of every product and should handle all exceptional cases in one array', () => {
      const gildedRose = new Shop(
        [
          new Item('Milk', 10, 50),
          new Item('Milk', 0, 50),
          new Item('Milk', 0, 1),
          new Item('Aged Brie', 10, 40),
          new Item('Aged Brie', 10, 50),
          new Item('Sulfuras, Hand of Ragnaros', 0, 50),
          new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25),
          new Item('Backstage passes to a TAFKAL80ETC concert', 5, 25),
          new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
          new Item('Conjured', 10, 25),
        ],
      );
      const items = gildedRose.updateQuality();
      // decrease a normal product in quality and sellin
      expect(items[0].name).toBe('Milk');
      expect(items[0].quality).toBe(49);
      expect(items[0].sellIn).toBe(9);
      // decrease quality twice as fast when sellIn passed
      expect(items[1].name).toBe('Milk');
      expect(items[1].quality).toBe(48);
      expect(items[1].sellIn).toBe(-1);
      // decrease quality to minimum 0
      expect(items[2].name).toBe('Milk');
      expect(items[2].quality).toBe(0);
      expect(items[2].sellIn).toBe(-1);
      // increase quality twice as fast when aging for brie
      expect(items[3].name).toBe('Aged Brie');
      expect(items[3].quality).toBe(41);
      expect(items[3].sellIn).toBe(9);
      // increase quality to maximum 50
      expect(items[4].name).toBe('Aged Brie');
      expect(items[4].quality).toBe(50);
      expect(items[4].sellIn).toBe(9);
      // do not update quality or sellin from Sulfuras
      expect(items[5].name).toBe('Sulfuras, Hand of Ragnaros');
      expect(items[5].quality).toBe(50);
      expect(items[5].sellIn).toBe(0);
      // increase quality with 2 when less than 10 days left until the concert
      expect(items[6].name).toBe('Backstage passes to a TAFKAL80ETC concert');
      expect(items[6].quality).toBe(27);
      expect(items[6].sellIn).toBe(9);
      // increase quality with 3 when less than 5 days left until the concert
      expect(items[7].name).toBe('Backstage passes to a TAFKAL80ETC concert');
      expect(items[7].quality).toBe(28);
      expect(items[7].sellIn).toBe(4);
      // set quality to 0 when concert passed
      expect(items[8].name).toBe('Backstage passes to a TAFKAL80ETC concert');
      expect(items[8].quality).toBe(0);
      expect(items[8].sellIn).toBe(-1);
      // decrease the sellIn of every product and should handle all exceptional cases in one array
      expect(items[9].name).toBe('Conjured');
      expect(items[9].quality).toBe(23);
      expect(items[9].sellIn).toBe(9);
    })
  })
});
