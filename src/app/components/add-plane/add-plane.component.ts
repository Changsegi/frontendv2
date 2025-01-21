import { Component } from '@angular/core';
import {Plane} from '../../models/plane.model';
import {Owner} from '../../models/owner.model';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {PlaneService} from '../../services/plane.service';
import {OwnerService} from '../../services/owner.service';

@Component({
  selector: 'app-add-plane',
  standalone: false,

  templateUrl: './add-plane.component.html',
  styleUrl: './add-plane.component.css'
})
export class AddPlaneComponent {

  plane: Plane = {
    id: 0,
    p_type:'',
    p_production_date:'',
    owners:[]
  }

  dropdownList: Owner[] = [];
  selectedOwners: Owner[] = [];
  dropdownSettings: IDropdownSettings = {};

  submitted = false;

  constructor(private planeService: PlaneService , private ownerService: OwnerService){}

  ngOnInit(): void{
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

  savePlane(): void {
    this.plane.owners = this.selectedOwners
    this.planeService.create(this.plane)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
      })
  }

  newPlane(): void {
    this.submitted = false;
    this.plane = {
      id: 0,
      p_type:'',
      p_production_date:'',
      owners:[]
    }
  }


  onItemSelect(item: any) {
    console.log(item);
  }





}
