import { Routes } from '@angular/router';
import { EventsShow } from './events-show/events-show';
import { EventAdd } from './events-show/event-add/event-add';

export const routes: Routes = [
  { path: 'events', component: EventsShow, title: 'Lista de eventos'},
  { path: 'events/add', component: EventAdd, title: 'Anyadir evento'},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
