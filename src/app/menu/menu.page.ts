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
      url: '/menu/home'
    },
    {
      title: 'Account',
      url: '/menu/account'
    },
    {
      title: 'Cart',
      url: '/menu/shoppers-cart'
    },
    {
      title: 'Contact',
      url: '/menu/contact'
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
