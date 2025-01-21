import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Plane} from '../models/plane.model';

const baseUrl = 'http://localhost:8080/planes'

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Plane[]> {
    return this.http.get<Plane[]>(baseUrl);
  }

  get(id: number): Observable<Plane> {
    return this.http.get<Plane>(`${baseUrl}/${id}`);
  }

  create(data: Plane): Observable<Plane> {
    return this.http.post<Plane>(baseUrl, data);
  }

  update(id: any, data: Plane): Observable<Plane> {
    return this.http.put<Plane>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTypeP(type: any): Observable<Plane[]> {
    return this.http.get<Plane[]>(`${baseUrl}?title=${type}`);
  }

}
