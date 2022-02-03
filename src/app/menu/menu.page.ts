import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  checkAuth: boolean;
  name:string;
  pages=[
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Account',
      url: '/menu/accountslanding',
      icon: 'person'
    },
    {
      title: 'Shop',
      url: '/menu/media',
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
  constructor(private router: Router, private authenticator:AuthService) {
    this.router.events.subscribe((event:RouterEvent) => {
      this.selectedPath = event.url;
    });
   }
  ngOnInit() {
    // this.checkAuth = this.authenticator.authenticationState.value;
    console.log("Auth value:")
    // this.authenticator.getSpecialData().subscribe(res =>{
    //   this.name = res['name'];
    // })
  }

}
