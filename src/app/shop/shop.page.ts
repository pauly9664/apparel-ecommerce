import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ShoppersCartService } from '../shoppers-cart.service';
import { ShoppersCartPage } from '../shoppers-cart/shoppers-cart.page';
import { ViewProductPage } from '../view-product/view-product.page';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  catSel:any;
  products:any=[];
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  constructor(private activatedRoute:ActivatedRoute, private loadingController: LoadingController,private modalCtrl: ModalController, private router: Router, private productsService: ShoppersCartService) { 
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.catSel = params.special;
        console.log("Cat url", this.catSel);
      }
    });
  }

  ngOnInit() {
    // this.catSel = this.activatedRoute.snapshot.paramMap.get('cat');
    this.cartItemCount = this.productsService.getCartItemCount();
    this.cart = this.productsService.getCart();
    this.presentLoadingWithOptions()
    this.queryProductsData();
  }
  async openCart(){ 
    //this.router.navigate(['menu/shoppers-cart']);
    let modal = await this.modalCtrl.create({
      component: ShoppersCartPage, 
      });
    modal.present();
  }
  queryProductsData() {
    this.productsService.getImages().subscribe(data => {
      this.products = data;
      this.products = this.products.filter(products=>
        products.category == this.catSel
        
        );
      console.log("This produce", this.products)
    })
    this.products = this.products.filter(products=>
      products.category == this.catSel
      
      );
      console.log('Getting there', this.catSel)
     
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
    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: "circles",
        duration: 500,
        message: 'Fetching... '+this.catSel,
        // translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
  }



