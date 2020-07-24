export function increaseQuality(quality, amount = 1) {
  if (quality + amount > 50) {
    return 50;
  }

  return quality + amount;
}