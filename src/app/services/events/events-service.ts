import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../models/event-model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<EventModel[]>  {
    return this.http.get<EventModel[]>('http://localhost:3000/api/events');
  }

  getAllSports() {
    return this.http.get<String[]>('http://localhost:3000/api/sports');
  }

  getAllEventsBySport(sport: string): Observable<EventModel[]>  {
    const params = new HttpParams().set('sport', sport);
    return this.http.get<EventModel[]>('http://localhost:3000/api/events', {params});
  }

  getAllEventsByCategoria(categoria: string): Observable<EventModel[]>  {
    const params = new HttpParams().set('categoria', categoria);
    return this.http.get<EventModel[]>('http://localhost:3000/api/events', {params});
  }

  getEventById(id: number): Observable<EventModel>  {
    return this.http.get<EventModel>('http://localhost:3000/api/events/'+ id);
  }
}
