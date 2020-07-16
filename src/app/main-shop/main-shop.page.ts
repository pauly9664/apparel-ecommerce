import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
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
  items = [];
  sel:any;
  prods:any;
  item:any;
  catchit:any;
  Kpi:any;
  cartItemCount: BehaviorSubject<number>;

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.5,
    watchSlidesProgress: true,
  }
  categorySelected: any;
  products: any;
  productCategory = [];

  constructor(private cartService: ShoppersCartService, private modalCtrl: ModalController, private router: Router, 
    //private slides: IonSlides

    ) { 
      this.reloadImages();
      
    }

  ngOnInit() {
    this.queryProductsData();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    // this.items = this.cartService.getImages();
    // this.item.forEach((element, index, array) => {
  
    //   this.catchit = element.category;
    //   console.log("Kwendaaa",this.catchit)
    // });
    console.log("Reveal",this.catchit);
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
 
  filterItems(ev:any){
    // this.searchControl.valueChanges;
    this.categorySelected = ev.target.value;
    console.log("dropdown cat:",this.categorySelected);

        this.item = this.item.filter(products=>
          products.category == this.categorySelected);
}
queryProductsData() {
  // let categorySelected = ev.target.value;
  //this.filterItems(Event);
  this.cartService.getImages().subscribe(data => {
    
    this.products = data;
    
    this.products.forEach((item)=>{
      // console.log("Categories", item.category);
      // if(item.category.indexOf(value) ==)
        this.productCategory.push(item.category);
        console.log("categories", item.category);
      })
   });
  }
  reloadImages() {
   this.cartService.getImages().subscribe(data => {
      this.item = data;
        console.log("cheki ii kwanza", this.item);
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
//   getMarketplaceItems() {
//  this.item.filter(item => 
//   this.items= item.category);   
  
//   }
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
