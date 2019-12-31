import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirmation-popover',
  templateUrl: './confirmation-popover.page.html',
  styleUrls: ['./confirmation-popover.page.scss'],
})
export class ConfirmationPopoverPage implements OnInit {
  passedDelivery = null;
  passedPayment = null;
  totalCartItems = null;
  loggedInUser = null;
  salesForm: FormGroup;

  constructor(private navParams: NavParams, private formBuilder: FormBuilder, private popoverController: PopoverController, private authService: AuthService) {
   }
   
  ngOnInit() {
  
    this.passedDelivery = this.navParams.get('delivery_id');
    this.passedPayment = this.navParams.get('payment_id');
    this.totalCartItems = this.navParams.get('total_id');
    this.loggedInUser = this.navParams.get('user_id');

    this.salesForm = this.formBuilder.group({
      amount: [this.totalCartItems],
      delivery_status: [this.passedPayment],
      payment_status: [this.passedDelivery],
      user_id: [this.loggedInUser]
    });
  }
  saleUpdate() {
    this.authService.updateSales(this.salesForm.value).subscribe();
  }
  mpesa(){
    this.authService.lipaMpesaOnline().subscribe();
  }
  closePopover(){
    this.popoverController.dismiss();
  }
}
