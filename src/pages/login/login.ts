import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  	
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Validando...",
      duration: 2000
    });
    loader.present();
  }


  presentLoadingFb() {
    let loader = this.loadingCtrl.create({
      content: "Conectando con Facebook...",
      duration: 2000
    });
    loader.present();
  }

}
