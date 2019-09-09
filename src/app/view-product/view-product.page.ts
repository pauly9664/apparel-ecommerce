import { Component, OnInit } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { Key } from 'protractor';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

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
  

  constructor(private cartService: ShoppersCartService, private router: Router) { }

  ngOnInit() {
    //this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts(); 
    let production = this.cartService.getSelect();
     let sel = {};
     for (let opt of production ) {
      if (sel[opt.id]) {
        sel[opt.id];
      } else {
        sel[opt.id] = { ...opt, count: 1 };
      }
     }
     this.product= Object.keys(sel).map(key => sel[key]);
}
addToCart(product){
  this.cartService.addProduct(product);
}
openCart(){ 
  this.router.navigate(['menu/shoppers-cart']);
}
}
  
//for(let i = 0; i < thproducts.length;i++){
      //;
