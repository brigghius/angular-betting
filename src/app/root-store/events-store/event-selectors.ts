import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventState } from './event-state';


export const selectEventsState =
  createFeatureSelector<EventState>('events');

export const selectAllEvents = createSelector(
  selectEventsState,
  (state) => state.events
);

export const selectLoading = createSelector(
  selectEventsState,
  (state) => state.loading
);

export const selectEventsError = createSelector(
  selectEventsState,
  (state) => state.error
);
