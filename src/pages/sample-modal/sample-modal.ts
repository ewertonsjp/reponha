import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SampleModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',
})
export class SampleModalPage {

  modalTitle: string = this.navParams.get('modalTitle');
  msgTitle: string = this.navParams.get('msgTitle');
  msg: string = this.navParams.get('msg');

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModal');
  }

  closeModal(confirm) {
    this.viewCtrl.dismiss({confirm:confirm});
  }

}
