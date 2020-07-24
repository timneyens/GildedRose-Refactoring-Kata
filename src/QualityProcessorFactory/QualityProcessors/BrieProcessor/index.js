export function brieProcessor(item) {
  --item.sellIn;
  if (item.sellIn < 0) {
    item.quality = increaseQuality(item.quality, 2);
    return item;

  }

  item.quality = increaseQuality(item.quality);
  return item;
}
