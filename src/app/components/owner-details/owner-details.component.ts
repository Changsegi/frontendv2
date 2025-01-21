import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../../services/owner.service';
import {Owner} from '../../models/owner.model';

@Component({
  selector: 'app-owner-details',
  standalone: false,

  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.css'
})
export class OwnerDetailsComponent {
  @Input() viewMode = false;

  @Input() currentOwner: Owner = {
    id: 0,
    name: '',
    address: ''
  };

  message = '';

  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() : void {
    if (!this.viewMode) {
      this.message = '';
      this.getOwner(this.route.snapshot.params["id"]);
    }
  }

  getOwner(id: number): void {
    this.ownerService.get(id)
      .subscribe({
        next: (data) => {
          this.currentOwner = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateOwner(): void {
    this.message = '';

    this.ownerService.update(this.currentOwner.id, this.currentOwner)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'This owner was updated successfully.';
        },
        error: (e) => console.error(e)
      })
  }

  deleteOwner(): void {
    this.ownerService.delete(this.currentOwner.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/owners']);
        },
        error: (e) => console.error(e)
      })
  }
}
