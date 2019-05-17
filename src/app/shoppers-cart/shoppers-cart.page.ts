import { Component, OnInit } from '@angular/core';
import { ShoppersCartService } from '../shoppers-cart.service';
import { BagServiceService } from '../bag-service.service';
import { SelectControlValueAccessor } from '@angular/forms';
import { SuitsServiceService } from '../suits-service.service';
import { ShoeServiceService } from '../shoe-service.service';
import { EtcServiceService } from '../etc-service.service';

@Component({
  selector: 'app-shoppers-cart',
  templateUrl: './shoppers-cart.page.html',
  styleUrls: ['./shoppers-cart.page.scss'],
})
export class ShoppersCartPage implements OnInit {
  selectedItems = [];
  total = 0;

  constructor(private cartService: ShoppersCartService, private etcService: EtcServiceService, private bagService: BagServiceService, private shoeService: ShoeServiceService, private suitsService: SuitsServiceService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let bags = this.bagService.getCart();
    let suits = this.suitsService.getCart();
    let shoes = this.shoeService.getCart();
    let other = this.etcService.getCart();

    let selected = {};

    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    for (let obj of bags) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 }
      }
    }
    for (let obj of suits) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    for (let obj of shoes) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 }
      }
    }
    for (let obj of other) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 }
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    console.log('items: ', this.selectedItems);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);

  }
}
