import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EventService {

  events: IEvent[] = [
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
    ];


  private eventsEndpoint = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]>{
    return this.http
      .get<IEvent[]>(this.eventsEndpoint);
  }

  addEvent(event: IEvent): Observable<IEvent>{
    return this.http
      .post<IEvent>(this.eventsEndpoint, event)
      .pipe(
        catchError((resp: HttpErrorResponse)=>
          throwError(
            ()=>
              new Error(
                `Error al crear evento, códifo de servidor: ${resp.status}. Mensaje: ${resp.message}`,
              ),
          ),
        ),
      );
  }

  deletingEvent(id: string): Observable<any> {
    return this.http
      .delete<IEvent>(`${this.eventsEndpoint}/${id}`);
  }
}
