import { Component, OnInit } from '@angular/core';
//import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { ShoppersCartService } from '../shoppers-cart.service';
import { EtcServiceService } from '../etc-service.service';
import { BagServiceService } from '../bag-service.service';
import { ShoeServiceService } from '../shoe-service.service';
import { SuitsServiceService } from '../suits-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  data = '';
  constructor(//private authService: AuthService, 
    private storage: Storage) { }

  ngOnInit() {
  }
  // loadSpecialInfo() {
  //   this.authService.getSpecialData().subscribe(res => {
  //     this.data = res['msg'];
  //   });
  }

