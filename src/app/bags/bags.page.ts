import { Component, OnInit } from '@angular/core';
import { BagServiceService } from '../bag-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.page.html',
  styleUrls: ['./bags.page.scss'],
})
export class BagsPage implements OnInit {
  cart = [];
  items = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8

  }

  constructor(private bagService: BagServiceService, private router: Router) { }

  ngOnInit() {
    this.cart = this.bagService.getCart();
    this.items = this.bagService.getProducts(); 
  }
  addToCart(product){
    this.bagService.addProduct(product);
  }
  openCart(){ 
    this.router.navigate(['shoppers-cart']);
  }
  
}
