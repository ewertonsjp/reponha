import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AudienceProvider } from '../../providers/audience-provider';

/**
 * Generated class for the SelfSchedule page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-self-schedule',
  templateUrl: 'self-schedule.html',
  providers: [AudienceProvider]
})
export class SelfSchedulePage {

  loading: Loading;

  turmas;
  selectedTurma;

  constructor(public navCtrl: NavController, public navParams: NavParams, public audienceProvider: AudienceProvider, public loadingCtrl: LoadingController) {
    this.turmas = this.audienceProvider.get();
    this.selectedTurma = this.turmas[0].id;
  }

  onChangeTurma(event) {
    /**show loading*/
    this.loading = this.loadingCtrl.create({
      content: 'Atualizando horários...',
      dismissOnPageChange: true
    });

    this.loading.present().then(() => {
      /**changing turma*/
      // this.calendar.currentDate = new Date();
      // this.loadEvents(this.selectedTurma);

      /**dismiss loading*/
      this.loading.dismiss();
    });

  }

}
