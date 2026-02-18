import { createAction, props } from "@ngrx/store";
import { EventModel } from "../../models/event-model";

export const loadEvents  = createAction(
    '[Event] loadEvents '
);

export const loadEventsSuccess = createAction(
    '[Event] loadEvents Success',
    props<{ events: EventModel[] }>()
);

export const loadEventsError = createAction(
  '[Event] loadEvents error ',
  props<{ error: any }>()
);