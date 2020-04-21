import { Component, OnInit } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { Key } from 'protractor';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';
import { NavParams, PopoverController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  product = [];
  cart = [];
  sel = [];
  items = [];
  img:any;
  // cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: ShoppersCartService, private popoverController: ModalController, private router: Router, private navParams: NavParams) {
     this.img = this.navParams.get('img');
     this.cart = this.cartService.getCart();
    //  this.cartItemCount = this.cartService.getCartItemCount();
    // console.log(this.img.description);
   }

  ngOnInit() {
  //this.cart = this.cartService.getCart();
     //this.items = this.cartService.getProducts(); 
    //  let production = this.cartService.getCart();
    // //  console.log('Selected:',production);
    //   let sel = {};
    //   for (let opt of this.img ) {
    //     console.log('Pes', opt);
    //    if (sel[opt._id]) {
    //      sel[opt._id];
    //    } else {
    //      sel[opt._id] = { ...opt, count: 1 };
    //    }
    //   }
    //   this.product= Object.keys(sel).map(key => sel[key]);
 }
addToCart(product){
  // this.cartService.addProduct(product);
  this.cart.push(this.img);
}
// addProduct(product){
//   this.cartService.addToView(product);
// }
openCart(){ 
  this.router.navigate(['menu/shoppers-cart']);
}
closePopover(){
  this.popoverController.dismiss();
}
}
  
//for(let i = 0; i < thproducts.length;i++){
      //;
