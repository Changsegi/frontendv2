import {Owner} from './owner.model';

export class Car {
  id?: number;
  c_type?: string;
  c_production_date?: string;
  owners?: Array<Owner>;
}
