import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppersCartService {

  private data = [
    {
      category: 'US Dresses',
      expanded: 'true',
      products: [
        { id: 0, name: 'SLN Fashion', price: '8000' },
        { id: 1, name: 'Ivanka Trump', price: '5000' },
        { id: 2, name: 'Elen Tracy', price: '13500' },
        { id: 3, name: 'Tommy Hilfiger', price: '12500' }
      ]
    },
    {
      category: 'Turkey Dresses',
      products: [
        { id: 4, name: 'Izzet candan', price: '5000' },
        { id: 5, name: 'La fiera', price: '9500' },
        { id: 6, name: 'Visconi', price: '10500' },
        { id: 7, name: 'Xmeric', price: '8500' }
      ]
    },
    {
      category: 'All tops',
      products: [
        { id: 8, name: 'Ali Yavuz', price: '2300' },
        { id: 9, name: 'Sioni ', price: '3500' },
        { id: 10, name: 'Milano ', price: '2500' },
        { id: 11, name: 'Vazi ', price: '3400' }
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
