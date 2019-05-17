import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AuthGuardService } from '../auth-guard.service';
import { equalPath } from '@angular/router/src/url_tree';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
      { path: 'shoppers-cart', loadChildren: '../shoppers-cart/shoppers-cart.module#ShoppersCartPageModule' },
      { path: 'main-shop', loadChildren: '../main-shop/main-shop.module#MainShopPageModule' },
      { path: 'checkout', loadChildren: '../checkout/checkout.module#CheckoutPageModule', canActivate: [AuthGuardService] },
      { path: 'shoes', loadChildren: '../shoes/shoes.module#ShoesPageModule' },
      { path: 'suits', loadChildren: '../suits/suits.module#SuitsPageModule' },
      { path: 'bags', loadChildren: '../bags/bags.module#BagsPageModule' },
      { path: 'register', loadChildren: '../register/register.module#RegisterPageModule' },
      { path: 'other-items', loadChildren: '../other-items/other-items.module#OtherItemsPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
