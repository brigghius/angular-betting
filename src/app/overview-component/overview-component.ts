import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllEvents, selectEventsError, selectLoading } from '../root-store/events-store/event-selectors';
import { loadEvents } from '../root-store/events-store/event-action';
import { EventModel } from '../models/event-model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-overview',
  imports: [CommonModule, MatCardModule],
  templateUrl: './overview-component.html',
  styleUrl: './overview-component.less',
})
export class OverviewComponent {

  listaEventi: Observable<EventModel[]>;
  loading: Observable<boolean>;
  error: Observable<any>;

  constructor(private store: Store) {

    this.listaEventi = this.store.select(selectAllEvents);
    this.loading = this.store.select(selectLoading);
    this.error = this.store.select(selectEventsError);
    console.log(this.listaEventi)
  }

  ngOnInit(): void {
    this.store.dispatch(loadEvents());
  }

}
