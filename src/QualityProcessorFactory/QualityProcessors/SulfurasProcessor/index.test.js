import { Item } from '../../../Classes/Item';
import { sulfurasProcessor } from '.';

describe('SulfurasProcessor', function () {
  it('should return item unchanged', () => {
    const brie = new Item('Aged Brie', 10, 40);
    const updatedBrie = sulfurasProcessor(brie);
    expect(updatedBrie).toBe(brie);
  });
});