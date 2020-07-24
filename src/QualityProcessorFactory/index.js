import {
  brieProcessor,
  concertProcessor,
  conjuredProcessor,
  defaultProcessor,
} from './QualityProcessors';

const Sulfuras = 'Sulfuras, Hand of Ragnaros';
const Brie = 'Aged Brie';
const Concert = 'Backstage passes to a TAFKAL80ETC concert';
const Conjured = 'Conjured';
const Default = 'Default';

export function getQualityProcessor(name) {
  const productProcessorFactory = {
    [Sulfuras]: (item) => item,
    [Brie]: brieProcessor,
    [Concert]: concertProcessor,
    [Conjured]: conjuredProcessor,
    [Default]: defaultProcessor,
  };

  const processor = productProcessorFactory[name] ? productProcessorFactory[name] : productProcessorFactory[Default];
  return processor
}