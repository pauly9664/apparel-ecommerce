import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ShoppersCartService } from '../shoppers-cart.service';


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
  cartItemCount: BehaviorSubject<number>;

  slidesConfig = {
    autoplay: true,
    centeredSlides: true,
    speed: 5000,
    pager: true,
    slidesPerView: 1
  }
  platform: any;

  constructor(private authService: AuthService, private cartService: ShoppersCartService, private nav: NavController, private router: Router,public loadingController: LoadingController, private storage: Storage, private activatedRoute:ActivatedRoute)
  {}

  ngOnInit() { 
   
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cart = this.cartService.getCart();
    //  loadSpecialInfo() {
      //  this.authService.getSpecialData().subscribe(res => {
      //    this.data = res['msg'];
      //    this.user_id = res['id'];
        //  this.users = this.user_id;
        
      //  });
  }
  logout() {
    this.authService.logout();
}
openCart(){ 
  this.router.navigate(['menu/shoppers-cart']);
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
