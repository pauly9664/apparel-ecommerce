import { Component, OnInit } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.page.html',
  styleUrls: ['./main-shop.page.scss'],
})
export class MainShopPage implements OnInit {

  cart = [];
  items = [];
  sel = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.5
  }

  constructor(private cartService: ShoppersCartService, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.sel = this.cartService.getSelect();
    this.items = this.cartService.getProducts(); 
  }
  // addToCart(product){
  //   this.cartService.addProduct(product);
  // }
  viewProduct(product){
    this.cartService.addToView(product);
  }
  
  openCart(){ 
    this.router.navigate(['menu/shoppers-cart']);
  }
}
