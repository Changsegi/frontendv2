import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import {PlaneListComponent} from './components/plane-list/plane-list.component';
import {PlaneDetailsComponent} from './components/plane-details/plane-details.component';
import {AddPlaneComponent} from './components/add-plane/add-plane.component';
import {LoginComponent} from './login/login.component';
import {UserGuard} from './user-guard.guard';
import {AdminGuard} from './admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cars', component: CarsListComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'add-car', component: AddCarComponent,  canActivate: [UserGuard]},
  { path: 'planes', component: PlaneListComponent },
  { path: 'planes/:id', component: PlaneDetailsComponent },
  { path: 'add-plane', component: AddPlaneComponent, canActivate: [UserGuard] },
  { path: 'owners', component: OwnerListComponent },
  { path: 'owners/:id', component: OwnerDetailsComponent },
  { path: 'add-owner', component: AddOwnerComponent, canActivate: [AdminGuard]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
