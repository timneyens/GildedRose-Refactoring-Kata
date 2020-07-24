import { getQualityProcessor } from './QualityProcessorFactory';

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items = this.items.map(item => getQualityProcessor(item.name)(item));

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
