import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.page.html',
  styleUrls: ['./confirmation-modal.page.scss'],
})
export class ConfirmationModalPage implements OnInit {

  passedDelivery = null;
  passedPayment = null;

  constructor(private modalController:ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.passedDelivery = this.navParams.get('custom_id');

  }

}
