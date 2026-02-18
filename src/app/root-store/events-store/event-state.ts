import { EventModel } from "../../models/event-model";

export interface EventState {
  events: EventModel[];
  loading: boolean;
  error: any;
}


export const initialState: EventState = {
  events: [],
  loading: false,
  error: null
};