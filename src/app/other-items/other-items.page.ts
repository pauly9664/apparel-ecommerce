import { Component, OnInit } from '@angular/core';
import { EtcServiceService } from '../etc-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-items',
  templateUrl: './other-items.page.html',
  styleUrls: ['./other-items.page.scss'],
})
export class OtherItemsPage implements OnInit {
  cart = [];
  other = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8

  }
  constructor(private etcService: EtcServiceService, private router: Router ) { }

  ngOnInit() {
    this.cart = this.etcService.getCart();
    this.other = this.etcService.getProducts(); 
  }
  addToCart(product){
    this.etcService.addProduct(product);
  }
  openCart(){ 
    this.router.navigate(['shoppers-cart']);
  }


}
