import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/car.model';
import {CarService} from '../../services/car.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: false,

  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentCar: Car = {
    id: 0,
    c_type: '',
    c_production_date: ''
  };

  message = '';

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() : void {
    if (!this.viewMode) {
      this.message = '';
      this.getCar(this.route.snapshot.params["id"]);
    }
  }

  getCar(id: number): void {
    this.carService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCar = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCar(): void {
    this.message = '';

    this.carService.update(this.currentCar.id, this.currentCar)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'This car was updated successfully.';
        },
        error: (e) => console.error(e)
      })
  }

  deleteCar(): void {
    this.carService.delete(this.currentCar.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/cars']);
        },
        error: (e) => console.error(e)
      })
  }
}
