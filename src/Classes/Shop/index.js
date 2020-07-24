import { getQualityProcessor } from '../../QualityProcessorFactory';

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items = this.items.map(item => getQualityProcessor(item.name)(item));

    return this.items;
  }
}