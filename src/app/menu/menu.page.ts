import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages=[
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Account',
      url: '/menu/history',
      icon: 'person'
    },
    {
      title: 'Shop Now',
      url: '/menu/items',
      icon: 'shirt'
    },
    {
      title: 'Cart',
      url: '/menu/shoppers-cart',
      icon: 'cart'
    },
    {
      title: 'Contact',
      url: '/menu/contact',
      icon: 'call'

    }
  ];

  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event:RouterEvent) => {
      this.selectedPath = event.url;
    });
   }
  ngOnInit() {
  }

}
