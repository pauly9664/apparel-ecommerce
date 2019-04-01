import { Component, OnInit } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.page.html',
  styleUrls: ['./main-shop.page.scss'],
})
export class MainShopPage implements OnInit {

  cart = [];
  items = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8

  }

  constructor(private cartService: ShoppersCartService, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts(); 
  }
  addToCart(product){
    this.cartService.addProduct(product);
  }
  openCart(){ 
    this.router.navigate(['shoppers-cart']);
  }

}
