import { Item } from '.';

describe('Item', function () {
  it('Constructur should create an item with a name, sell in and quality', () => {
    const item = new Item('Milk', 10, 50);
    expect(item.name).toBe('Milk');
    expect(item.sellIn).toBe(10);
    expect(item.quality).toBe(50);
  });
});