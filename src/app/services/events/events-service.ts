import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get('http://localhost:3000/api/events');
  }

  getAllSports() {
    return this.http.get<String[]>('http://localhost:3000/api/sports');
  }
}
