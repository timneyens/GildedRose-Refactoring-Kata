import { Item } from '../../../Classes/Item';
import { concertProcessor } from '.';

describe('ConcertProcessor', function () {
  it('should increase quality with 1 when 11 days left until the concert', () => {
    const concert = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 25);
    const updatedConcert = concertProcessor(concert);
    expect(updatedConcert.quality).toBe(26);
    expect(updatedConcert.sellIn).toBe(10);
  });

  it('should increase quality with 2 when less than 10 days left until the concert', () => {
    const concert = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25);
    const updatedConcert = concertProcessor(concert);
    expect(updatedConcert.quality).toBe(27);
    expect(updatedConcert.sellIn).toBe(9);
  });

  it('should increase quality with 2 when 6 days left until the concert', () => {
    const concert = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 25);
    const updatedConcert = concertProcessor(concert);
    expect(updatedConcert.quality).toBe(27);
    expect(updatedConcert.sellIn).toBe(5);
  });

  it('should increase quality with 3 when less than 5 days left until the concert', () => {
    const concert = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 25);
    const updatedConcert = concertProcessor(concert);
    expect(updatedConcert.quality).toBe(28);
    expect(updatedConcert.sellIn).toBe(4);
  });

  it('should set quality to 0 when concert passed ', () => {
    const concert = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50);
    const updatedConcert = concertProcessor(concert);
    expect(updatedConcert.quality).toBe(0);
    expect(updatedConcert.sellIn).toBe(-1);
  });
});