import { Item } from '../../../Classes/Item';
import { conjuredProcessor } from '.';

describe('ConjuredProcessor', function () {
  it('should decrease quality twice as fast', () => {
    const conjured = new Item('Conjured', 10, 25);
    const updatedConjured = conjuredProcessor(conjured);
    expect(updatedConjured.quality).toBe(23);
    expect(updatedConjured.sellIn).toBe(9);
  });
});