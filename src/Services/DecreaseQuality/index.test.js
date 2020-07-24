import { decreaseQuality } from '.';

describe('DecreaseQuality', function () {
  it('should decrease quality by 1 by dedault', () => {
    const quality = decreaseQuality(50);
    expect(quality).toBe(49);
  });

  it('should decrease quality by x by when provided', () => {
    const quality = decreaseQuality(50, 20);
    expect(quality).toBe(30);
  });

  it('should not decrease quality lower than 0', () => {
    const quality = decreaseQuality(50, 51);
    expect(quality).toBe(0);
  });
});