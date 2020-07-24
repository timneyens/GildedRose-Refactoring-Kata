import { decreaseQuality } from '../../../Services';

export function conjuredProcessor(item) {
  --item.sellIn;
  item.quality = decreaseQuality(item.quality, 2);

  return item;
}