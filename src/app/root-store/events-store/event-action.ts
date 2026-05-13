import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { EventModel } from "../../models/event-model";

/* export const loadEvents  = createAction(
    '[Event] loadEvents '
);

export const loadEventsSuccess = createAction(
    '[Event] loadEvents Success',
    props<{ events: EventModel[] }>()
);

export const loadEventsError = createAction(
  '[Event] loadEvents error ',
  props<{ error: any }>()
); */

// Utilizzo di createActionGroup per raggruppare le azioni correlate agli eventi
export const events = createActionGroup({
    source: 'Event',
    events: {
        'loadEvents': emptyProps(),
        'loadEventsSuccess': props<{ events: EventModel[] }>(),
        'loadEventsError': props<{ error: any }>()
    }
});

export const loadEventsBySport  = createAction(
    '[Event] loadEventsBySport ',
    props<{ sport: string }>()
);

export const loadEventsBySportSuccess = createAction(
    '[Event] loadEventsBySport Success',
    props<{ events: EventModel[] }>()
);

export const loadEventsBySportError = createAction(
  '[Event] loadEventsBySport error ',
  props<{ error: any }>()
);

export const loadEventsByCategoria  = createAction(
    '[Event] loadEventsByCategoria ',
    props<{ categoria: string }>()
);

export const loadEventsByCategoriaSuccess = createAction(
    '[Event] loadEventsByCategoria Success',
    props<{ events: EventModel[] }>()
);

export const loadEventsByCategoriaError = createAction(
  '[Event] loadEventsByCategoria error ',
  props<{ error: any }>()
);