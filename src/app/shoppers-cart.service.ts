import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppersCartService {

   data = [
    {
      category: 'US Dresses',
      expanded: 'true',
      products: [
        { id: 0, name: 'SLN Fashion', price: '8000', url:'assets/afro3.jpg' },
        { id: 1, name: 'Ivanka Trump', price: '5000', url:'assets/afro2.jpg' },
        { id: 2, name: 'Elen Tracy', price: '13500', url:'assets/afro1.jpg' },
        { id: 3, name: 'Tommy Hilfiger', price: '12500', url:'assets/img3.jpg' }
      ]
    },
    {
      category: 'Turkey Dresses',
      products: [
        { id: 4, name: 'Izzet candan', price: '5000', url:'assets/img1.jpg' },
        { id: 5, name: 'La fiera', price: '9500', url:'assets/img3.jpg' },
        { id: 6, name: 'Visconi', price: '10500', url:'assets/kaunda.jpg' },
        { id: 7, name: 'Xmeric', price: '8500', url:'assets/hat1.jpg'  }
      ]
    },
    {
      category: 'All tops',
      products: [
        { id: 8, name: 'Ali Yavuz', price: '2300', url: 'assets/afro2.jpg' },
        { id: 9, name: 'Sioni ', price: '3500', url:'assets/hat4.jpg' },
        { id: 10, name: 'Milano ', price: '2500', url:'assets/suit1.jpg' },
        { id: 11, name: 'Vazi ', price: '3400', url:'assets/PRETSAL.png' }
      ]
    }
  ];

  private cart = [];

  constructor() { }
  getProducts() {
    return this.data;
  }
  getCart() {
    return this.cart;
  }
  addProduct(product) {
    this.cart.push(product);
  }
}
