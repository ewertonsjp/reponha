import { Injectable } from '@angular/core';

/*
  Generated class for the ScheduleProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ScheduleProvider {

  constructor() {

  }

  loadEvents(turmaId) {
    var events = [];
    if (turmaId == 1) {
      /*Dia: 26/4*/
      events.push({
          id: 1,
          title: 'BIOLOGIA',
          startTime: new Date(2017, 3, 26, 13, 0, 0, 0),
          endTime: new Date(2017, 3, 26, 13, 50, 0, 0),
          allDay: false
      });
      events.push({
          id: 2,
          title: 'BIOLOGIA',
          startTime: new Date(2017, 3, 26, 13, 50, 0, 0),
          endTime: new Date(2017, 3, 26, 14, 40, 0, 0),
          allDay: false
      });
      events.push({
          id: 3,
          title: 'MATEMÁTICA',
          startTime: new Date(2017, 3, 26, 14, 0, 0, 0),
          endTime: new Date(2017, 3, 26, 15, 30, 0, 0),
          allDay: false
      });
      events.push({
          id: 4,
          title: 'FISICA',
          startTime: new Date(2017, 3, 26, 15, 40, 0, 0),
          endTime: new Date(2017, 3, 26, 16, 30, 0, 0),
          allDay: false
      });
      events.push({
          id: 5,
          title: 'FISICA',
          startTime: new Date(2017, 3, 26, 16, 30, 0, 0),
          endTime: new Date(2017, 3, 26, 17, 20, 0, 0),
          allDay: false
      });
      events.push({
          id: 6,
          title: 'FISICA',
          startTime: new Date(2017, 3, 26, 17, 20, 0, 0),
          endTime: new Date(2017, 3, 26, 18, 10, 0, 0),
          allDay: false
      });
      events.push({
          id: 7,
          title: 'LIVRE',
          startTime: new Date(2017, 3, 26, 18, 10, 0, 0),
          endTime: new Date(2017, 3, 26, 19, 0, 0, 0),
          allDay: false
      });

      /*Dia: 27/4*/
      events.push({
          id: 1,
          title: 'TED',
          startTime: new Date(2017, 3, 27, 13, 0, 0, 0),
          endTime: new Date(2017, 3, 27, 13, 50, 0, 0),
          allDay: false
      });
      events.push({
          id: 2,
          title: 'TED',
          startTime: new Date(2017, 3, 27, 13, 50, 0, 0),
          endTime: new Date(2017, 3, 27, 14, 40, 0, 0),
          allDay: false
      });
      events.push({
          id: 3,
          title: 'TED',
          startTime: new Date(2017, 3, 27, 14, 0, 0, 0),
          endTime: new Date(2017, 3, 27, 15, 30, 0, 0),
          allDay: false
      });
      events.push({
          id: 4,
          title: 'PAW',
          startTime: new Date(2017, 3, 27, 15, 40, 0, 0),
          endTime: new Date(2017, 3, 27, 16, 30, 0, 0),
          allDay: false
      });
      events.push({
          id: 5,
          title: 'PAW',
          startTime: new Date(2017, 3, 27, 16, 30, 0, 0),
          endTime: new Date(2017, 3, 27, 17, 20, 0, 0),
          allDay: false
      });
      events.push({
          id: 6,
          title: 'LIVRE',
          startTime: new Date(2017, 3, 27, 17, 20, 0, 0),
          endTime: new Date(2017, 3, 27, 18, 10, 0, 0),
          allDay: false
      });
      events.push({
          id: 7,
          title: 'LIVRE',
          startTime: new Date(2017, 3, 27, 18, 10, 0, 0),
          endTime: new Date(2017, 3, 27, 19, 0, 0, 0),
          allDay: false
      });

    } else {
      events.push({
        id: 3,
        title: 'LIVRE',
        startTime: new Date(2017, 3, 25, 7, 0, 0, 0),
        endTime: new Date(2017, 3, 25, 7, 50, 0, 0),
        allDay: false
      });
    }
    return events;
  }

}
