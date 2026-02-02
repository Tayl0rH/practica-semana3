import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'titleFilter',
})
export class TitleFilterPipe implements PipeTransform {

  transform(events: IEvent[], filterBy: string): IEvent[] {

    const filter = filterBy ?  filterBy.toLocaleLowerCase() : null;

    return  filter
            ? events.filter(
                (event) => event.title.toLocaleLowerCase().includes(filter)
              )
            : events;

  }

}
