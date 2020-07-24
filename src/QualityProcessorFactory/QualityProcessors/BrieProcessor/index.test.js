import { Item } from '../../../Classes/Item';
import { brieProcessor } from '.';

describe('BrieProcessor', function () {
  it('should increase in quality when aging for brie', () => {
    const brie = new Item('Aged Brie', 10, 40);
    const updatedBrie = brieProcessor(brie);
    expect(updatedBrie.quality).toBe(41);
    expect(updatedBrie.sellIn).toBe(9);
  });

  it('should increase double in quality when sellin is less than 0 when aging for brie', () => {
    const brie = new Item('Aged Brie', 0, 40);

    const updatedBrie = brieProcessor(brie);
    expect(updatedBrie.quality).toBe(42);
    expect(updatedBrie.sellIn).toBe(-1);
  });

  it('should increase quality to maximum 50', () => {
    const brie = new Item('Aged Brie', 10, 50);
    const updatedBrie = brieProcessor(brie);
    expect(updatedBrie.quality).toBe(50);
    expect(updatedBrie.sellIn).toBe(9);
  });
});