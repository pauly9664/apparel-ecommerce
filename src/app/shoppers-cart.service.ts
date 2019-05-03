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
        { id: 0, name: 'SLN Fashion', price: '8000', url:'assets/p1.jpg' },
        { id: 1, name: 'Ivanka Trump', price: '5000', url:'assets/p2.jpg' },
        { id: 2, name: 'Elen Tracy', price: '13500', url:'assets/p3.jpg' },
        { id: 3, name: 'Tommy Hilfiger', price: '12500', url:'assets/p4.jpg' }
      ]
    },
    {
      category: 'Turkey Dresses',
      products: [
        { id: 4, name: 'Izzet candan', price: '5000', url:'assets/p5.jpg' },
        { id: 5, name: 'La fiera', price: '9500', url:'assets/p6.jpg' },
        { id: 6, name: 'Visconi', price: '10500', url:'assets/p7.jpg' },
        { id: 7, name: 'Xmeric', price: '8500', url:'assets/p8.jpg'  }
      ]
    },
    {
      category: 'All tops',
      products: [
        { id: 8, name: 'Ali Yavuz', price: '2300', url: 'assets/p9.jpg' },
        { id: 9, name: 'Sioni ', price: '3500', url:'assets/p10.jpg' },
        { id: 10, name: 'Milano ', price: '2500', url:'assets/ssuit.jpg' },
        { id: 11, name: 'Vazi ', price: '3400', url:'assets/suit3.jpg' }
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
