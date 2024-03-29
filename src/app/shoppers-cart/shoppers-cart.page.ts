import { Component, OnInit } from '@angular/core';
import { ShoppersCartService, Product } from '../shoppers-cart.service';
import { SelectControlValueAccessor } from '@angular/forms';
import { ConfirmationPopoverPage } from '../confirmation-popover/confirmation-popover.page';
import { LoginPopoverPage } from '../login-popover/login-popover.page';
import { NavController, PopoverController, NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmationModalPage } from '../confirmation-modal/confirmation-modal.page';


@Component({
  selector: 'app-shoppers-cart',
  templateUrl: './shoppers-cart.page.html',
  styleUrls: ['./shoppers-cart.page.scss'],
})
export class ShoppersCartPage implements OnInit {
  selectedItems = [];
  total = 0;
  totalCost = null;
  item:any = []
  // img:any;
  cart = [];
  checkAuth: boolean;
 

  constructor(private cartService: ShoppersCartService, private authService: AuthService, private popoverController: PopoverController,private modalCtrl:ModalController, private authenticatedUser: AuthService,private nav: NavController, private router:Router) { }

  ngOnInit() {
    this.checkAuth = this.authService.authenticationState.value;
    // console.log("Auth Val:", this.checkAuth);
    
    // this.authenticatedUser.authenticationState.subscribe(state => {
    //   if(state) {
    //     this.router.navigate(['menu/checkout']);
    //   } else{
    //     this.authenticatedUser.loginPopover;
    //   }   
    // })
    this.cart = this.cartService.getCart();
    console.log('Woo',this.cart);
    // this.img = this.navParams.get('img');
    let items = this.cartService.getCart();
    //this.item = this.cartService.getCart();
    // this.reloadImages();   
  


    // let selected = {};
    // // console.log("Select key items:", bags);
    // for(let obj of this.img){
    //   if(selected[obj._id]){
    //     selected[obj._id].count++;
    //   }else{
    //     selected[obj.id] = { ...obj, count: 1 };
    //   }
    // }
    // for ( let obj of items) {
    //   if (selected[obj.id]) {
    //     selected[obj.id].count++;
    //   }
    //    else {
    //     selected[obj.id] = { ...obj, count: 1 };
    //   }
    // }
    

    // for (let obj of this.item) {
    //   if (selected[obj._id]) {
    //     console.log('Data iko apa', this.item)
    //     selected[obj._id].count++;
    //   } 
    // }
    // for (let obj of bags) {
    //   if (selected[obj.id]) {
    //     selected[obj.id].count++;
    //   } else {
    //     selected[obj.id] = { ...obj, count: 1 }
    //   }
    // }
    // for (let obj of suits) {
    //   if (selected[obj.id]) {
    //     selected[obj.id].count++;
    //   } else {
    //     selected[obj.id] = { ...obj, count: 1 };
    //   }
    // }
    // for (let obj of shoes) {
    //   if (selected[obj.id]) {
    //     selected[obj.id].count++;
    //   } else {
    //     selected[obj.id] = { ...obj, count: 1 }
    //   }
    // }
    // for (let obj of other) {
    //   if (selected[obj.id]) {
    //     selected[obj.id].count++;
    //   } else {
    //     selected[obj.id] = { ...obj, count: 1 }
    //   }
    // }
    // this.selectedItems = Object.keys(selected).map(key => selected[key]);
    // console.log('items: ', this.selectedItems);
    // this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.total), 0);
    // this.totalCost = this.total;
  
    // console.log('Total:', this.totalCost);
  }
  async loginPopover(ev: Event){
    const popover = await this.popoverController.create({
      component: LoginPopoverPage, 

    });
    popover.present();
  }
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
  reloadImages(){
    this.item = this.cartService.getImages();
    // .subscribe(data => {
    //   this.item = data;
    //    console.log(this.item);
    //    return data;
    // });;
  }
  // pushTotal(){
  //   this.nav.navigateForward(`menu/checkout${this.totalCost}`);
  // }
  removeFromCart(product){
    this.cartService.removeProduct(product);
  }
  closePopover(){
    this.modalCtrl.dismiss();
  }
  async checkAuthent(){
  
    if(this.checkAuth === false){
      let modal = await this.popoverController.create({
      
        component: ConfirmationModalPage, 
          // componentProps:{
          //   img: img,
          // }
        });
      modal.present();
    }
  }
}
