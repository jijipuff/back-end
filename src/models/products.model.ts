import { Entity, property, model } from '@loopback/repository';

@model()
export class Products extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
  })
  productname: string;

  @property({
    type: 'number',
  })
  price: number

  @property({
    type: 'string',
  })
  desc: string;

  getId() {
    return this.id;
  }
}
