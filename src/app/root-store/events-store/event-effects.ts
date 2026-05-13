import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { /* loadEvents, */ events, loadEventsByCategoria, loadEventsByCategoriaError, loadEventsByCategoriaSuccess, loadEventsBySport, loadEventsBySportError, loadEventsBySportSuccess,/*  loadEventsError, loadEventsSuccess */ } from "./event-action";
import { EventsService } from '../../services/events/events-service';


@Injectable()
export class EventEffects {

    private actions = inject(Actions);
    private eventsService = inject(EventsService);

    loadEvents = createEffect(() =>
        this.actions.pipe(
            ofType(events.loadEvents),
            switchMap(() =>
                this.eventsService.getAllEvents().pipe(
                    map(resp => events.loadEventsSuccess({ events: resp })),
                    catchError(error =>
                        of(events.loadEventsError({ error }))
                    )
                )
            )
        )
    );

    loadEventsBySport = createEffect(() =>
        this.actions.pipe(
            ofType(loadEventsBySport),
            switchMap((action: any) =>
                this.eventsService.getAllEventsBySport(action.sport).pipe(
                    map(events => loadEventsBySportSuccess({ events })),
                    catchError(error =>
                        of(loadEventsBySportError({ error }))
                    )
                )
            )
        )
    );

    loadEventsByCategoria = createEffect(() =>
        this.actions.pipe(
            ofType(loadEventsByCategoria),
            switchMap((action: any) =>
                this.eventsService.getAllEventsByCategoria(action.categoria).pipe(
                    map(events => loadEventsByCategoriaSuccess({ events })),
                    catchError(error =>
                        of(loadEventsByCategoriaError({ error }))
                    )
                )
            )
        )
    );

}