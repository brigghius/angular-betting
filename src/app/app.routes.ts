import { Routes } from '@angular/router';
import { OverviewComponent } from './overview-component/overview-component';
import { EventComponent } from './event-component/event-component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    { path: 'overview', component: OverviewComponent },
    { path: 'sport', component: OverviewComponent },
    { path: 'categoria', component: OverviewComponent },
    { path: 'event/:id', component: EventComponent}
];

