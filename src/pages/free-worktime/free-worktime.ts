import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AudienceProvider } from '../../providers/audience-provider';

/**
 * Generated class for the FreeWorktime page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-free-worktime',
  templateUrl: 'free-worktime.html',
  providers: [AudienceProvider]
})
export class FreeWorktimePage {

  loading: Loading;

  scheduleProvider;

  turmas;
  selectedTurma;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public audienceProvider: AudienceProvider) {
    this.turmas = audienceProvider.get();
    this.selectedTurma = this.turmas[0].id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreeWorktime');
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
