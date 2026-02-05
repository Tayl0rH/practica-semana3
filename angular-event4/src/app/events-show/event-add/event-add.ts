import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { IEvent, } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../services/event-service';


@Component({
  selector: 'app-event-add',
  imports: [FormsModule],
  templateUrl: './event-add.html',
  styleUrl: './event-add.css',
})
export class EventAdd {

  @Input() events!: IEvent[];

  @Output() addingEvent = new EventEmitter<IEvent>();

  constructor(private eventServ: EventService){}

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };


  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.image = reader.result as string;
    });
  }

  addEvent() {
    /* this.addingEvent.emit(this.newEvent);
    this.events.push(this.newEvent); */

    this.eventServ.addEvent(this.newEvent).subscribe();

    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    }
  }

}


