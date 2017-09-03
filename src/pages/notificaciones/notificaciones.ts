import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import { LoadingController } from 'ionic-angular';

@Component({
	templateUrl: 'notificaciones.html'
})

export class Notificaciones { 

	users: any[] = [];

	constructor(
	    public navCtrl: NavController,
	    public userService: ServiceProvider,
	    public loadingCtrl: LoadingController,
	  ) {

		this.getDados();
	}


	getDados(){

	    this.userService.getData()
	    .then(data => {
	      this.users = data.results;
	    })
	    .catch(err =>{
	      console.error(err);
	    })
	}

	presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Actualizando",
      duration: 1000
    });
    loader.present();
    this.getDados();
  }
}


