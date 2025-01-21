import { Component } from '@angular/core';
import {Owner} from '../../models/owner.model';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/car.model';
import {OwnerService} from '../../services/owner.service';

@Component({
  selector: 'app-owner-list',
  standalone: false,

  templateUrl: './owner-list.component.html',
  styleUrl: './owner-list.component.css'
})
export class OwnerListComponent {
  owners?: Owner[];
  currentOwner: Owner = {};
  currentIndex = -1;
  name = '';
  address = '';

  constructor(private ownerService: OwnerService) { }

  ngOnInit() : void {
    this.retrieveOwners();
  }

  retrieveOwners(): void {
    this.ownerService.getAll()
      .subscribe({
        next: (data) => {
          this.owners = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveOwners();
    this.currentOwner = {};
    this.currentIndex = -1;
  }

  setActiveOwner(owner: Owner, index: number) : void {
    this.currentOwner = owner;
    this.currentIndex = index;
  }

  removeAllOwners(): void {
    this.ownerService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentOwner = {};
    this.currentIndex = -1;

    this.ownerService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.owners = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }
}
