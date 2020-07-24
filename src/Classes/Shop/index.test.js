import { getQualityProcessor } from '../../QualityProcessorFactory';
import { Item } from '../Item';
import { Shop } from '.';

jest.mock('../../QualityProcessorFactory');

describe('Shop', function () {
  it('constructur should create an shop with items', () => {
    const item1 = new Item('Milk', 10, 12);
    const item2 = new Item('Aged Brie', 10, 40);
    const item3 = new Item('Sulfuras, Hand of Ragnaros', 10, 20);

    const shop = new Shop([item1, item2, item3]);

    expect(shop.items).toEqual([item1, item2, item3]);
  });

  it('updateQuality should fetch and execute quality processor for each item', () => {
    const item1 = new Item('Milk', 10, 12);
    const item2 = new Item('Aged Brie', 10, 40);
    const item3 = new Item('Sulfuras, Hand of Ragnaros', 10, 20);

    const shop = new Shop([item1, item2, item3]);
    const qualityProcessor = jest.fn();
    qualityProcessor.mockReturnValue({});
    getQualityProcessor.mockReturnValue(qualityProcessor);

    shop.updateQuality();

    expect(getQualityProcessor).toHaveBeenNthCalledWith(1, 'Milk');
    expect(getQualityProcessor).toHaveBeenNthCalledWith(2, 'Aged Brie');
    expect(getQualityProcessor).toHaveBeenNthCalledWith(3, 'Sulfuras, Hand of Ragnaros');

    expect(qualityProcessor).toHaveBeenNthCalledWith(1, item1);
    expect(qualityProcessor).toHaveBeenNthCalledWith(2, item2);
    expect(qualityProcessor).toHaveBeenNthCalledWith(3, item3);
  });
});