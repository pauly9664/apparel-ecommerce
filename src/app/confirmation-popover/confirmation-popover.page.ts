import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-popover',
  templateUrl: './confirmation-popover.page.html',
  styleUrls: ['./confirmation-popover.page.scss'],
})
export class ConfirmationPopoverPage implements OnInit {
  passedDelivery = null;
  passedPayment = null;
  totalCartItems = null;

  constructor(private navParams: NavParams, private popoverController: PopoverController) {
   }
   
  ngOnInit() {
  
    this.passedDelivery = this.navParams.get('delivery_id');
    this.passedPayment = this.navParams.get('payment_id');
    this.totalCartItems = this.navParams.get('total_id');
  }
  closePopover(){
    this.popoverController.dismiss();
  }

}
