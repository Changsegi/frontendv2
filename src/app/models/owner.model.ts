import {Plane} from './plane.model';
import {Car} from './car.model';

export class Owner {
  id?: number;
  name?: string;
  address?: string;
  planes?: Plane[];
  cars?: Car[]
}
