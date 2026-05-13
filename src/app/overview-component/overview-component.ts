import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { selectAllEvents, selectEventsError, selectLoading } from '../root-store/events-store/event-selectors';
//import { loadEvents } from '../root-store/events-store/event-action';
import { EventModel } from '../models/event-model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonValueService } from '../services/common-value-service/common-value-service';


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

  private route = inject(ActivatedRoute);
  commonService = inject(CommonValueService);

  constructor(private store: Store, 
    private router: Router,
  ) {
    this.listaEventi = this.store.select(selectAllEvents);
    this.loading = this.store.select(selectLoading);
    this.error = this.store.select(selectEventsError);
    
    let path = this.route.snapshot.routeConfig?.path
    if (typeof path !== 'string') return;
      this.commonService.sport.set(path);
  }

  ngOnInit(): void {
  }

  dettaglioEvento(evento: EventModel){
    this.commonService.sport.update(v => v = evento.sport);
    this.commonService.categoria.update(v => v = evento.categoria);
    this.router.navigateByUrl('event/'+evento.id);
  }


}
