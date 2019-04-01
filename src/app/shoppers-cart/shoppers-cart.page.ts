import { Component, OnInit } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';

@Component({
  selector: 'app-shoppers-cart',
  templateUrl: './shoppers-cart.page.html',
  styleUrls: ['./shoppers-cart.page.scss'],
})
export class ShoppersCartPage implements OnInit {
  selectedItems = [];
  total = 0;

  constructor(private cartService: ShoppersCartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};

    for (let obj of items){
      if(selected[obj.id]){
        selected[obj.id].count++;
      }else{
        selected[obj.id] = {...obj, count: 1};
      }
    }

    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    console.log('items: ', this.selectedItems );
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);

  }
}
