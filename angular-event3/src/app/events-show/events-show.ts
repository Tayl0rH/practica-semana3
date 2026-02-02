import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventFilterPipe } from '../pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';
import { EventItem } from "./event-item/event-item";
import { EventAdd } from "./event-add/event-add";
import { EventService } from '../event-service';

@Component({
  selector: 'app-events-show',
  imports: [EventFilterPipe, FormsModule, EventItem, EventAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

 /*  events: IEvent[] = [
    {
      title: 'Discoteca spook',
      image: '/images/spook.jpg',
      date: '2026-04-23',
      description:
        'Spook es un icono de la noche electrónica, donde música, luces y energía se fusionan en una experiencia única que marca generaciones y convierte cada noche en algo inolvidable.',
      price: 23,
    },
    {
      title: 'Boda mujer contra mujer',
      image: '/images/boda.jpg',
      date: '2026-02-10',
      description:
        'Una boda es la celebración del amor, un día especial donde se unen emociones, familia y amigos para compartir momentos únicos que quedarán grabados para siempre.',
      price: 59.99,
    },
    {
      title: 'Festival de música urbana',
      image: '/images/urbana.jpg',
      date: '2026-06-15',
      description:
        'Un festival lleno de ritmo y energía donde los mejores artistas urbanos se reúnen para ofrecer una experiencia musical intensa y vibrante al aire libre.',
      price: 35,
    },
    {
      title: 'Concierto acústico íntimo',
      image: '/images/intimo.jpg',
      date: '2026-03-05',
      description:
        'Un concierto cercano y especial en un ambiente reducido, donde la música en directo y la conexión con el artista crean una experiencia única.',
      price: 18,
    },
    {
      title: 'Evento corporativo networking',
      image: '/images/networking.jpg',
      date: '2026-05-20',
      description:
        'Un encuentro profesional pensado para conectar ideas, personas y oportunidades en un entorno dinámico, moderno y cuidadosamente organizado.',
      price: 0,
    },
  ]; */

  events:IEvent[]=[];
  constructor(private eventServ:EventService){}

  ngOnInit():void {
    this.events=this.eventServ.getEvents();
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
    this.events = this.events.filter((e) => e !== thisEvent);
  }
}
