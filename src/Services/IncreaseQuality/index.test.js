import { increaseQuality } from '.';

describe('IncreaseQuality', function () {
  it('should increase quality by 1 by dedault', () => {
    const quality = increaseQuality(20);
    expect(quality).toBe(21);
  });

  it('should increase quality by x by when provided', () => {
    const quality = increaseQuality(10, 20);
    expect(quality).toBe(30);
  });

  it('should not increase quality higher than 50', () => {
    const quality = increaseQuality(20, 41);
    expect(quality).toBe(50);
  });
});