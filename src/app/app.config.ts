import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { eventReducer, eventsFeatureKey } from './root-store/events-store/event-reducer';
import { EventEffects } from './root-store/events-store/event-effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(withFetch()),
    provideEffects([EventEffects]), provideStore({[eventsFeatureKey]: eventReducer  }), provideStoreDevtools(),
]
};
