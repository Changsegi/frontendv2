import { Component } from '@angular/core';
import {Owner} from '../../models/owner.model';
import {OwnerService} from '../../services/owner.service';

@Component({
  selector: 'app-add-owner',
  standalone: false,

  templateUrl: './add-owner.component.html',
  styleUrl: './add-owner.component.css'
})
export class AddOwnerComponent {
  owner: Owner = {
    id: 0,
    name: '',
    address: ''
  };
  submitted = false;

  constructor(private ownerService: OwnerService) {}

  saveOwner(): void {
    this.ownerService.create(this.owner)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newOwner(): void {
    this.submitted = false;
    this.owner = {
      id: 0,
      name: '',
      address: ''
    };
  }
}
