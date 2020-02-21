import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
//import {ViewChild} from '@ionic/angular';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.page.html',
  styleUrls: ['./main-shop.page.scss'],
})
export class MainShopPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  cart = [];
  items = [];
  sel = [];


  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.5,
    watchSlidesProgress: true,
  }

  constructor(private cartService: ShoppersCartService, private router: Router, 
    //private slides: IonSlides
    ) { }

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
  // @ViewChild(Slides) slides: Slides;
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }
}
