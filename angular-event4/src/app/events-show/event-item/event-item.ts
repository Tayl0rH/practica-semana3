import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { IEvent } from '../../interfaces/i-event';

@Component({
  selector: 'app-event-item',
  imports: [DatePipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './event-item.html',
  styleUrl: './event-item.css',
})
export class EventItem {

  @Input() event!: IEvent;

  @Output() deletingEvent = new EventEmitter<void>();

  onDeleteEvent(){
    this.deletingEvent.emit();
  }
}
