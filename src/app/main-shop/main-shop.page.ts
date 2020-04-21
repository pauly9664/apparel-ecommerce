import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppersCartService, Product } from '../shoppers-cart.service';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { ViewProductPage } from '../view-product/view-product.page';
import { BehaviorSubject, Observable } from 'rxjs';
//import {ViewChild} from '@ionic/angular';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.page.html',
  styleUrls: ['./main-shop.page.scss'],
})
export class MainShopPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  cart = [];
  items:any
  sel:any;
  item:any;
  cartItemCount: BehaviorSubject<number>;

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.5,
    watchSlidesProgress: true,
  }

  constructor(private cartService: ShoppersCartService, private modalCtrl: ModalController, private router: Router, 
    //private slides: IonSlides

    ) { 
      this.reloadImages();
      
    }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    // this.reloadImages()
    // this.items = this.reloadImages();
    // this.item = this.cartService.getImages();
    // console.log('Items', this.items);
    // this.item = this.reloadImages();
    // this.items = this.reloadImages();
    // console.log('Yooo', this.items);
    // this.sel = this.cartService.getSelect();
    
    // this.item = this.cartService.getProducts(); 
    // console.log(typeof this.item);
    // console.log(this.items);
    // console.log('Selected',this.sel)
  }
  async addToCart(product){
    this.cartService.addProduct(product);
  }

  reloadImages() {
   this.cartService.getImages().subscribe(data => {
      this.item = data;
        console.log(typeof this.item);
    });
  }
  async openImage(img) {
    console.log(img)
    let modal = await this.modalCtrl.create({
      
      component: ViewProductPage, 
        componentProps:{
          img: img,
        }
      });
    modal.present();
  }
  viewProduct(product){
     this.cartService.addProduct(product);
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
