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
      events.push({
          id: 1,
          title: 'LIVRE',
          startTime: new Date(),
          endTime: new Date(),
          allDay: false
      });
      events.push({
          id: 2,
          title: 'EM ANÁLISE',
          startTime: new Date(2017, 3, 26, 7, 0, 0, 0),
          endTime: new Date(2017, 3, 26, 7, 50, 0, 0),
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
