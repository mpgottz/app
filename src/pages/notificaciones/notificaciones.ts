import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

import { LoadingController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
	templateUrl: 'notificaciones.html'
})

export class Notificaciones { 

	characterNum;

	users: any[] = [];

	constructor(public platform: Platform
			   ,public params: NavParams
			   ,public viewCtrl: ViewController
			   ,public userService: ServiceProvider
			   ,public navCtrl: NavController
			   ,public loadingCtrl: LoadingController
			   ,public modalCtrl: ModalController)
	{

	var characterNum = params.get('characterNum');

	this.valores(characterNum);

	}


	valores(characterNum){
		
		this.userService.getDataPersonal(characterNum)
			.then(data => {
			this.users = data.results;
		})
			.catch(err =>{
			console.error(err);
		})
	}

	presentLoading(characterNum) {
		let loader = this.loadingCtrl.create({
		content: "Actualizando",
		duration: 1000
	});
		loader.present();
		this.valores(CharacterData);

	}

	openModal(characterNum) {
		//console.log(characterNum)
		let modal = this.modalCtrl.create(ModalContentPage, {characterNum: characterNum});
		modal.present();

	}

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
	<ion-title>
	  Descripción
	</ion-title>
	<ion-buttons start>
	  <button ion-button (click)="dismiss()">
		<span ion-text color="primary" showWhen="ios">Cancelar</span>
		<ion-icon name="md-close" showWhen="android, windows"></ion-icon>
	  </button>
	</ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list *ngFor="let user of users">
	  <ion-item>
		<ion-avatar item-start>
		  <img [src]="user.picture.large">
		</ion-avatar>
		<h2>texto 1</h2>
		<p>texto 2</p>
	  </ion-item>
	  <ion-item >  
		{{user.email}}
		<ion-note item-end>
		  {{user.email}}
		</ion-note>
	  </ion-item>
  </ion-list>
</ion-content>
`
})

export class ModalContentPage {
	
	characterNum;

	users: any[] = [];

	constructor(public platform: Platform
			   ,public params: NavParams
			   ,public viewCtrl: ViewController
			   ,public userService: ServiceProvider,)
	{

	var characterNum = params.get('characterNum');

	this.valores(characterNum);

	}


	valores(characterNum){
		
		this.userService.getDataPersonal(characterNum)
			.then(data => {
			this.users = data.results;
		})
			.catch(err =>{
			console.error(err);
		})
	}

	/*
	valores(){

	  var characters = [
			{ 
				name:'Hilsong en VIvo',
				image: 'assets/img/nin-live.png',
				item:[
					{title:'Tamaño',note:'1 Entrada'},
					{title:'Sección',note:'Librería'},
					{title:'Marca',note:'Gloria a Dios'}	
				]
			}
		];
		this.character = characters[this.params.get('charNum')];

	  
	}
	*/

	dismiss() {
		this.viewCtrl.dismiss();
	}
}