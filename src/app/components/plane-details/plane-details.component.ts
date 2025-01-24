import {Component, Input, OnInit} from '@angular/core';
import {Plane} from '../../models/plane.model';
import {PlaneService} from '../../services/plane.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-plane-details',
  standalone: false,

  templateUrl: './plane-details.component.html',
  styleUrl: './plane-details.component.css'
})
export class PlaneDetailsComponent {
  @Input() viewMode = false;

  @Input() currentPlane: Plane = {
    id: 0,
    p_type:'',
    p_production_date:'',
    owners:[]
  }


  message = '';

  constructor(
    private planeService: PlaneService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() : void {
    if (!this.viewMode) {
      this.message = '';
      this.getPLane(this.route.snapshot.params["id"]);
    }
  }


  getPLane(id: number): void {
    this.planeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPlane = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePlane(): void {
    this.message = '';
    this.planeService.update(this.currentPlane.id, this.currentPlane)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'This plane was updated successfully.';
        },
        error: (e) => console.error(e)
      })
  }

  deletePlane(): void {
    this.planeService.delete(this.currentPlane.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/planes']);
        },
      })
  }


}
