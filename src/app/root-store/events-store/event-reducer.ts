import { createReducer, on } from "@ngrx/store";
import { initialState } from "./event-state";
import { loadEvents, loadEventsError, loadEventsSuccess } from "./event-action";

export const eventsFeatureKey = 'events';

export const eventReducer = createReducer(
    initialState,
    on(loadEvents, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadEventsSuccess, (state, { events }) => ({
    ...state,
    events,
    loading: false
  })),

  on(loadEventsError, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);