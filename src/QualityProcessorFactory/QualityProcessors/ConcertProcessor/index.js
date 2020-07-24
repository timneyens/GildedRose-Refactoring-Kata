import { increaseQuality } from '../../../Services';

export function concertProcessor(item) {
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
      item.quality = increaseQuality(item.quality);
      return item;
  }
}