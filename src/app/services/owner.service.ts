import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from '../models/car.model';
import {Owner} from '../models/owner.model';

const baseUrl = 'http://localhost:8080/owners'

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(baseUrl);
  }

  get(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${baseUrl}/${id}`);
  }

  create(data: Owner): Observable<Owner> {
    return this.http.post<Owner>(baseUrl, data);
  }

  update(id: any, data: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Car[]> {
    return this.http.get<Owner[]>(`${baseUrl}?name=${name}`);
  }
}
