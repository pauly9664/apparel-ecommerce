import { Component, OnInit } from '@angular/core';
import { SuitsServiceService } from '../suits-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suits',
  templateUrl: './suits.page.html',
  styleUrls: ['./suits.page.scss'],
})
export class SuitsPage implements OnInit {
  cart = [];
  suits = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8

  }

  constructor(private suitsService: SuitsServiceService, private router: Router) { }

  ngOnInit() {
    this.cart = this.suitsService.getCart();
    this.suits = this.suitsService.getProducts(); 
  }
  addToCart(product){
    this.suitsService.addProduct(product);
  }
  openCart(){ 
    this.router.navigate(['shoppers-cart']);
  }

}
