import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl = 'http://localhost:3000/driver';

  constructor(private http: HttpClient) { }

  getDriversList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
