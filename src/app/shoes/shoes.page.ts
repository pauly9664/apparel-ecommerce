import { Component, OnInit } from '@angular/core';
import { ShoeServiceService } from '../shoe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.page.html',
  styleUrls: ['./shoes.page.scss'],
})
export class ShoesPage implements OnInit {
  cart = [];
  items = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.8

  }

  constructor(private shoeService: ShoeServiceService, private router: Router) { }

  ngOnInit() {
    this.cart = this.shoeService.getCart();
    this.items = this.shoeService.getProducts(); 
  }
  addToCart(product){
    this.shoeService.addProduct(product);
  }
  openCart(){ 
    this.router.navigate(['shoppers-cart']);
  }

  }

