import { Component } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import {OwnerService} from '../../services/owner.service';
import {Owner} from '../../models/owner.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-car',
  standalone: false,

  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  car: Car = {
    id: 0,
    c_type: '',
    c_production_date: '',
    owners: []
  };
  dropdownList: Owner[] = [];
  selectedOwners?: Owner[] = [];
  dropdownSettings: IDropdownSettings = {};

  submitted = false;

  constructor(private carService: CarService, private ownerService: OwnerService) { }

  ngOnInit() : void {
    this.retrieveOwners();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  retrieveOwners(): void {
    this.ownerService.getAll()
      .subscribe({
        next: (data) => {
          this.dropdownList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  saveCar(): void {
    this.car.owners = this.selectedOwners
    this.carService.create(this.car)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCar(): void {
    this.submitted = false;
    this.car = {
      id: 0,
      c_type: '',
      c_production_date: '',
      owners: []
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }

}
