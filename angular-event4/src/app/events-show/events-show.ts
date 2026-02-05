import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';
import { EventItem } from "./event-item/event-item";
import { EventAdd } from "./event-add/event-add";
import { EventService } from '../services/event-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-events-show',
  imports: [EventFilterPipe, FormsModule, EventItem, EventAdd, AsyncPipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

  events:IEvent[]=[];

  events$: Observable<IEvent[]>;

  constructor(private eventServ:EventService){
    this.events$ = this.eventServ.getEvents();
  }

  ngOnInit():void {
    this.events$=this.eventServ.getEvents();
  }


  storingEvent(newEvent: IEvent){
    this.events =[...this.events, newEvent];
  }

  search: string = '';

  orderDate() {
    this.search = '';
    this.events = [...this.events].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }

  orderPrice() {
    this.search = '';
    this.events = [...this.events].sort((a, b) => a.price - b.price);
  }

  deleteEvent(thisEvent: IEvent){
  /*
    this.events.splice(this.events.indexOf(thisEvent), 1);
  */
    //this.events = this.events.filter((e) => e !== thisEvent);

    this.eventServ.deletingEvent(thisEvent.id!).subscribe();

    this.events$ = this.eventServ.getEvents();
  }
}
