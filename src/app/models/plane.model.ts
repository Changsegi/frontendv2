import {Owner} from './owner.model';

export class Plane {
  id?: number;
  p_type?: string;
  p_production_date?: string;
  owners?: Array<Owner>;
}
