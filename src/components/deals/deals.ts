import { Component } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';

/**
 * Generated class for the DealsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'deals',
  templateUrl: 'deals.html'
})
export class DealsComponent {

  text: string;
  dealsObj = [
    {
      url: 'assets/img/venkman.jpg',
      name: 'Venkman',
      desc: "Back off man, I'm a scientist."
    },
    {
      url: 'assets/img/spengler.jpg',
      name: 'Egon',
      desc: "We're gonna go full stream."
    },
    {
      url: 'assets/img/stantz.jpg',
      name: 'Ray',
      desc: "Ugly little spud, isn't he?"
    },
    {
      url: 'assets/img/venkman.jpg',
      name: 'Venkman',
      desc: 'Back off man, I\'m a scientist.'
    },
    {
      url: 'assets/img/winston.jpg',
      name: 'Winston',
      desc: "That's a big Twinkie."
    },
    {
      url: 'assets/img/tully.jpg',
      name: 'Winston',
      desc: "Okay, who brought the dog?"
    },
    {
      url: 'assets/img/barrett.jpg',
      name: 'Dana',
      desc: "I am The Gatekeeper!"
    },
  ];

  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController) {
    console.log('Hello DealsComponent Component');
    this.text = 'Hello World';
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Remove Deal from this list?',
      message: 'Are you sure, you want to remove to remove this deal from this list?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
