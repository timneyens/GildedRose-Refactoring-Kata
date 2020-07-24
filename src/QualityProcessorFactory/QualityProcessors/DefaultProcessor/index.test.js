import { Item } from '../../../Classes/Item';
import { defaultProcessor } from '.';

describe('DefaultProcessor', function () {
  it('should decrease quality and sellin', () => {
    const conjured = new Item('Conjured', 20, 25);
    const updatedConjured = defaultProcessor(conjured);
    expect(updatedConjured.sellIn).toBe(19);
    expect(updatedConjured.quality).toBe(24);
  });

  it('should decrease quality twice as fast when sellin below 0', () => {
    const conjured = new Item('Conjured', 0, 25);
    const updatedConjured = defaultProcessor(conjured);
    expect(updatedConjured.sellIn).toBe(-1);
    expect(updatedConjured.quality).toBe(23);
  });
});