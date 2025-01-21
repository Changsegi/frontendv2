import { Component } from '@angular/core';
import {Plane} from '../../models/plane.model';
import {PlaneService} from '../../services/plane.service';

@Component({
  selector: 'app-plane-list',
  standalone: false,

  templateUrl: './plane-list.component.html',
  styleUrl: './plane-list.component.css'
})

export class PlaneListComponent {
  planes?: Plane[];
  currentPlane: Plane = {};
  currentIndex = -1;
  type = '';

  constructor(private planeService: PlaneService) {
  }

  ngOnInit() : void {
    this.retrievePlanes();
  }

  retrievePlanes(): void{
    this.planeService.getAll()
      .subscribe({
        next: (data) => {
          this.planes = data;
          console.log(data);
        },
          error: (e) => console.error(e)
      })
  }

  refreshList(): void {
    this.retrievePlanes();
    this.currentPlane = {};
    this.currentIndex = -1;
  }

  setActivePlane(plane: Plane, index: number) : void {
    this.currentPlane = plane;
    this.currentIndex = index;
  }

  removeAllPlanes(): void {
    this.planeService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      })
  }




}
