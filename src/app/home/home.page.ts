import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { ToastController, NavController, LoadingController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ShoppersCartService } from '../shoppers-cart.service';
import { ShoppersCartPage } from '../shoppers-cart/shoppers-cart.page';
import { ViewProductPage } from '../view-product/view-product.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  data = '';
  user_id = null;
  users = null;
  cart = [];
  item:any;
  cartItemCount: BehaviorSubject<number>;
  checkAuth: boolean;
  isMobileLayout = false;
  isWebLayout = false;
  slidesConfig = {
    autoplay: true,
    centeredSlides: true,
    speed: 5000,
    pager: true,
    slidesPerView: 1,
    
  }
  platform: any;

  constructor(private authService: AuthService, private modalCtrl:ModalController, private cartService: ShoppersCartService, private nav: NavController, private router: Router,public loadingController: LoadingController, private storage: Storage, private activatedRoute:ActivatedRoute)
  {}

  ngOnInit() { 
    if (window.screen.width > 767) { // 768px portrait
      this.isWebLayout = true;
    }
    if (window.screen.width < 768){
      this.isMobileLayout = true;
    }
    // window.onresize = () => this.isMobileLayout = window.innerWidth <= 500;
    // window.onresize = () => this.isWebLayout = window.innerWidth >= 772;
    this.presentLoadingWithOptions();
    this.reloadImages();
  //  this.checkAuth = this.authService.authenticationState.value;
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cart = this.cartService.getCart();
    //  loadSpecialInfo() {
      //  this.authService.getSpecialData().subscribe(res => {
      //    this.data = res['msg'];
      //    this.user_id = res['id'];
        //  this.users = this.user_id;
        
      //  });
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
  moveShop(){
    this.router.navigate(['/menu/media'])
  }
  logout() {
    this.authService.logout();
}
async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: "crescent",
    duration: 500,
    message: 'LOADING...',
    // translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
}
async openCart(){ 
  //this.router.navigate(['menu/shoppers-cart']);
  let modal = await this.modalCtrl.create({
      
    component: ShoppersCartPage, 
      // componentProps:{
      //   img: img,
      // }
    });
  modal.present();
}
reloadImages() {
  this.cartService.getImages().subscribe(data => {
     this.item = data;
       console.log("cheki ii kwanza", this.item);
       this.item.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
   });
   
 }
pushUser(){
  this.nav.navigateForward(`menu/history${this.users}`);
}
async presentLogoutWithOptions() {
  const loading = await this.loadingController.create({
    spinner: "bubbles",
    duration: 500,
    message: 'Thank you :-)',
    translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
}

}
