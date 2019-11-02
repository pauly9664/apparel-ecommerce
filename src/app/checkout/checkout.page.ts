import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { ModalController, PopoverController,NavController, } from '@ionic/angular'
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';
import { ShoppersCartService } from '../shoppers-cart.service';
import { EtcServiceService } from '../etc-service.service';
import { BagServiceService } from '../bag-service.service';
import { ShoeServiceService } from '../shoe-service.service';
import { SuitsServiceService } from '../suits-service.service';
import { ConfirmationPopoverPage } from '../confirmation-popover/confirmation-popover.page';
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  // value = 2;
  loggedInUser = '';
  data = ''; 
  overallCost = '';
  selectedDelivery: string = '';
  delivery: any = [
    'Set pick-up station around CBD',
    'Deliver to station e.g office',
    'Set pick-up date'
  ];
  selectedPayment: string = '';
  payment: any = [
    'Lipa na Mpesa Online',
    'MPESA on Delivery',
    'Cash on Delivery'
  ];
 
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDelivery = event.target.value;
  }
  radioChangeHandler (event: any){
    this.selectedPayment = event.target.value;
  }

  constructor(private authService: AuthService, 
 private storage: Storage, private activatedRoute:ActivatedRoute, private router: Router, private authenticatedUser: AuthService, private modalController: ModalController, private popoverController:PopoverController, private nav:NavController) { }

ngOnInit(){   
  // this.authenticatedUser.authenticationState.subscribe(state => {
  //   if(state) {
  //     this.router.navigate(['menu/checkout']);
  //   } else{
  //     this.router.navigate(['menu/login']);
  //   }   
  // })
  
  //this.totalCost = this.navParams.get('total_id');
  this.overallCost = this.activatedRoute.snapshot.paramMap.get('totals');

  //  loadSpecialInfo() {
     this.authService.getSpecialData().subscribe(res => {
       this.data = res['msg'];
       this.loggedInUser = res['id'];
      //  return res;
       //console.log(this.data);
     });
}
// console.log(this.overallCost);
    async openModal() {
      const modal = await this.modalController.create({
        component: ConfirmationPopoverPage,
        componentProps:{
          custom_id: this.selectedDelivery
        }
      });
       modal.present();
    }
    async openPopover(ev: Event){
      const popover = await this.popoverController.create({
        component: ConfirmationPopoverPage, 
        componentProps:{
          delivery_id: this.selectedDelivery,
          payment_id: this.selectedPayment,
          total_id: this.overallCost,
          user_id: this.loggedInUser
        }
      });
      popover.present();
    }
  
   loadSpecialInfo() {
     this.authService.getSpecialData().subscribe(res => {
       this.data = res['msg'];
       return res;
       //console.log(this.data);
     });
  }
}
