import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PlaneListComponent } from './components/plane-list/plane-list.component';
import { PlaneDetailsComponent } from './components/plane-details/plane-details.component';
import { AddPlaneComponent } from './components/add-plane/add-plane.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    CarDetailsComponent,
    CarsListComponent,
    AddOwnerComponent,
    OwnerDetailsComponent,
    OwnerListComponent,
    PlaneListComponent,
    PlaneDetailsComponent,
    AddPlaneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
