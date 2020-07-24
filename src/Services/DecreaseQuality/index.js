export function decreaseQuality(quality, amount = 1) {
  if (quality - amount < 0) {
    return 0;
  }

  return quality - amount;
}