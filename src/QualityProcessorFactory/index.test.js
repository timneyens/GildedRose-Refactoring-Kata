import {
  brieProcessor,
  concertProcessor,
  conjuredProcessor,
  defaultProcessor,
  sulfurasProcessor,
} from './QualityProcessors';
import { getQualityProcessor } from '.';

describe('GetQualityProcessor', function () {
  it('should return sulfurasProcessor when name is Sulfuras, Hand of Ragnaros', () => {
    const processor = getQualityProcessor('Sulfuras, Hand of Ragnaros');
    expect(processor).toBe(sulfurasProcessor);
  });

  it('should return brieProcessor when name is Aged Brie', () => {
    const processor = getQualityProcessor('Aged Brie');
    expect(processor).toBe(brieProcessor);
  });

  it('should return concertProcessor when name is Backstage passes to a TAFKAL80ETC concert', () => {
    const processor = getQualityProcessor('Backstage passes to a TAFKAL80ETC concert');
    expect(processor).toBe(concertProcessor);
  });

  it('should return conjuredProcessor when name is Conjured', () => {
    const processor = getQualityProcessor('Conjured');
    expect(processor).toBe(conjuredProcessor);
  });

  it('should return defaultProcessor when name is Aged Brie', () => {
    const processor = getQualityProcessor('Unknown');
    expect(processor).toBe(defaultProcessor);
  });
});