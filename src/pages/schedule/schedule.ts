import { Component } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';
import { ScheduleProvider } from '../../providers/schedule-provider';
import { AudienceProvider } from '../../providers/audience-provider';
import { SampleModalPage } from '../sample-modal/sample-modal';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  providers: [ScheduleProvider, AudienceProvider]
})

export class SchedulePage {

  scheduleProvider;

  turmas;
  selectedTurma;

  selectedEvent;

  /** Attributes of Calendar*/
  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
      mode: 'month',
      currentDate: new Date()
  };

  constructor(scheduleProvider: ScheduleProvider, audienceProvider: AudienceProvider, public modalCtrl: ModalController, public alertCtrl: AlertController) {
    this.scheduleProvider = scheduleProvider;

    this.turmas = audienceProvider.get();
    this.selectedTurma = this.turmas[0].id;
    this.loadEvents(this.selectedTurma);
  }

  onChangeTurma(event) {
    this.calendar.currentDate = new Date();
    this.loadEvents(this.selectedTurma);
  }

  loadEvents(turmaId) {
      this.eventSource = this.scheduleProvider.loadEvents(turmaId);
  }

  openModal() {
    let obj = {modalTitle: 'Confirmação', msgTitle: 'Solicitação de Reserva', msg: 'Deseja solicitar reposição para a data selecionada?'};
    let myModal = this.modalCtrl.create(SampleModalPage, obj);

    myModal.onDidDismiss(data => {
      if (data.confirm == true) {
        this.selectedEvent.title = 'PENDING';
        let alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Solicitação realizada com sucesso!',
            buttons: ['OK']
          });
        alert.present();
      }
    });

    myModal.present();
  }

  onViewTitleChanged(title) {
      this.viewTitle = title;
  }

  onEventSelected(event) {
      this.selectedEvent = event;
      this.openModal();
  }

  changeMode(mode) {
      this.calendar.mode = mode;
  }

  today() {
      this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {
      console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
          (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

  onCurrentDateChanged(event:Date) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      event.setHours(0, 0, 0, 0);
      this.isToday = today.getTime() === event.getTime();
  }

  createRandomEvents() {
      var events = [];
      for (var i = 0; i < 50; i += 1) {
          var date = new Date();
          var eventType = Math.floor(Math.random() * 2);
          var startDay = Math.floor(Math.random() * 90) - 45;
          var endDay = Math.floor(Math.random() * 2) + startDay;
          var startTime;
          var endTime;

          if (eventType === 0) {
              startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
              if (endDay === startDay) {
                  endDay += 1;
              }
              endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
              events.push({
                  title: 'All Day - ' + i,
                  startTime: startTime,
                  endTime: endTime,
                  allDay: true
              });
          } else {
              var startMinute = Math.floor(Math.random() * 24 * 60);
              var endMinute = Math.floor(Math.random() * 180) + startMinute;
              startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
              endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
              events.push({
                  title: 'LIVRE',
                  startTime: startTime,
                  endTime: endTime,
                  allDay: false
              });
          }
      }
      return events;
  }

  onRangeChanged(ev) {
      console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  markDisabled = (date:Date) => {
      var current = new Date();
      current.setHours(0, 0, 0);
      return date < current;
  };

}
