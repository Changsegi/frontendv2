import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

const baseUrl = 'http://localhost:8080/cars'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(baseUrl);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${baseUrl}/${id}`);
  }

  create(data: Car): Observable<Car> {
    return this.http.post<Car>(baseUrl, data);
  }

  update(id: any, data: Car): Observable<Car> {
    return this.http.put<Car>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByType(type: any): Observable<Car[]> {
    return this.http.get<Car[]>(`${baseUrl}?title=${type}`);
  }
}
