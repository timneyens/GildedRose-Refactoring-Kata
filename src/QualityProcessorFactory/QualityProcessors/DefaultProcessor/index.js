export function defaultProcessor(item) {
  --item.sellIn;
  item.quality = decreaseQuality(item.quality);
  if (item.sellIn < 0) {
    item.quality = decreaseQuality(item.quality);
  }

  return item;
}