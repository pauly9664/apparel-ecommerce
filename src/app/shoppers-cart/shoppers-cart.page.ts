import { Component, OnInit } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';
import { BagServiceService } from '../bag-service.service';
import { SelectControlValueAccessor } from '@angular/forms';
import { SuitsServiceService } from '../suits-service.service';
import { ShoeServiceService } from '../shoe-service.service';
import { EtcServiceService } from '../etc-service.service';
import { ConfirmationPopoverPage } from '../confirmation-popover/confirmation-popover.page';
import { LoginPopoverPage } from '../login-popover/login-popover.page';
import { NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-shoppers-cart',
  templateUrl: './shoppers-cart.page.html',
  styleUrls: ['./shoppers-cart.page.scss'],
})
export class ShoppersCartPage implements OnInit {
  selectedItems = [];
  total = 0;
  totalCost = null;
 

  constructor(private cartService: ShoppersCartService, private popoverController: PopoverController, private authenticatedUser: AuthService,private nav: NavController, private router:Router,private etcService: EtcServiceService, private bagService: BagServiceService, private shoeService: ShoeServiceService, private suitsService: SuitsServiceService) { }

  ngOnInit() {
    
    // this.authenticatedUser.authenticationState.subscribe(state => {
    //   if(state) {
    //     this.router.navigate(['menu/checkout']);
    //   } else{
    //     this.authenticatedUser.loginPopover;
    //   }   
    // })
    let items = this.cartService.getCart();
    let item = this.cartService.getSelect();
    let bags = this.bagService.getCart();
    let suits = this.suitsService.getCart();
    let shoes = this.shoeService.getCart();
    let other = this.etcService.getCart();

    let selected = {};

    for (let obj of item) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    

    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } 
    }
    for (let obj of bags) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 }
      }
    }
    for (let obj of suits) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    for (let obj of shoes) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 }
      }
    }
    for (let obj of other) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 }
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    console.log('items: ', this.selectedItems);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.total), 0);
    this.totalCost = this.total;
  
    console.log('Total:', this.totalCost);
  }
  async loginPopover(ev: Event){
    const popover = await this.popoverController.create({
      component: LoginPopoverPage, 

    });
    popover.present();
  }
  pushTotal(){
    this.nav.navigateForward(`menu/checkout${this.totalCost}`);
  }
  removeFromCart(product){
    this.cartService.removeProduct(product);
  }
}
