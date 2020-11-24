import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.page.html',
  styleUrls: ['./confirmation-modal.page.scss'],
})
export class ConfirmationModalPage implements OnInit {

  constructor(private popovercontroller: PopoverController) { }

  ngOnInit() {
    

}
  closePopover(){
    this.popovercontroller.dismiss();
  }

}
