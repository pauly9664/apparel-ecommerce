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

  constructor(private cartService: ShoppersCartService, private router: Router) { }

  ngOnInit() {
    //this.product = this.cartService.getView();
    let production = this.cartService.getView();
     let sel = {};
     for (let opt of production ) {
      if (sel[opt.id]) {
        sel[opt.id].count++;
      } else {
        sel[opt.id] = { ...opt, count: 1 };
      }
     }
     this.product= Object.keys(sel).map(key => sel[key]);
}
}
  
//for(let i = 0; i < thproducts.length;i++){
      //;
