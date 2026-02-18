import { createReducer, on } from "@ngrx/store";
import { initialState } from "./event-state";
import { loadEvents, loadEventsByCategoria, loadEventsByCategoriaError, loadEventsByCategoriaSuccess, loadEventsBySport, loadEventsBySportError, loadEventsBySportSuccess, loadEventsError, loadEventsSuccess } from "./event-action";

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
  })),

  on(loadEventsBySport, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadEventsBySportSuccess, (state, { events }) => ({
    ...state,
    events,
    loading: false
  })),

  on(loadEventsBySportError, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(loadEventsByCategoria, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadEventsByCategoriaSuccess, (state, { events }) => ({
    ...state,
    events,
    loading: false
  })),

  on(loadEventsByCategoriaError, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);