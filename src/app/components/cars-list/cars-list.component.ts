import { Component } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars-list',
  standalone: false,
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {
  cars?: Car[];
  currentCar: Car = {};
  currentIndex = -1;
  type = '';

  constructor(private carService: CarService) { }

  ngOnInit() : void {
    this.retrieveCars();
  }

  retrieveCars(): void {
    this.carService.getAll()
      .subscribe({
        next: (data) => {
          this.cars = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCars();
    this.currentCar = {};
    this.currentIndex = -1;
  }

  setActiveCar(car: Car, index: number) : void {
    this.currentCar = car;
    this.currentIndex = index;
  }

  removeAllCars(): void {
    this.carService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
