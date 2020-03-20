class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const Sulfuras = 'Sulfuras, Hand of Ragnaros';
const Brie = 'Aged Brie';
const Concert = 'Backstage passes to a TAFKAL80ETC concert';
const Conjured = 'Conjured';
const Default = 'Default';

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const productFactory = {
      [Sulfuras]: (item) => item,
      [Brie]: (item) => {
        --item.sellIn;
        item.quality = increaseQuality(item.quality);
        return item;
      },
      [Concert]: (item) => {
        --item.sellIn;
        switch (true) {
          case item.sellIn < 0:
            item.quality = 0;
            return item;
          case item.sellIn < 5:
            item.quality = increaseQuality(item.quality, 3);
            return item;
          case item.sellIn < 10:
            item.quality = increaseQuality(item.quality, 2);
            return item;
          default:
            return item;
        }
      },
      [Conjured]: (item) => {
        --item.sellIn;
        item.quality = decreaseQuality(item.quality, 2);

        return item;
      },
      [Default]: (item) => {
        --item.sellIn;
        item.quality = decreaseQuality(item.quality);
        if (item.sellIn < 0) {
          item.quality = decreaseQuality(item.quality);
        }

        return item;
      }
    };

    this.items = this.items.map(item =>
      productFactory[item.name]
        ? productFactory[item.name](item)
        : productFactory[Default](item));

    return this.items;
  }
}

function increaseQuality(quality, amount = 1) {
  if (quality + amount > 50) {
    return 50;
  }

  return quality + amount;
}

function decreaseQuality(quality, amount = 1) {
  if (quality - amount < 0) {
    return 0;
  }

  return quality - amount;
}

module.exports = {
  Item,
  Shop
}
