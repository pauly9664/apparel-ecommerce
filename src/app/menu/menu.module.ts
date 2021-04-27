import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AuthGuardService } from '../auth-guard.service';
import { equalPath } from '@angular/router/src/url_tree';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
    //  { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
      { path: 'shoppers-cart', loadChildren: '../shoppers-cart/shoppers-cart.module#ShoppersCartPageModule' },
      { path: 'main-shop', loadChildren: '../main-shop/main-shop.module#MainShopPageModule' },
      { path: 'checkout/:totals', loadChildren: '../checkout/checkout.module#CheckoutPageModule',
    },
      { path: 'view-product', loadChildren: '../view-product/view-product.module#ViewProductPageModule' },
      { path: 'register', loadChildren: '../register/register.module#RegisterPageModule' },
      { path: 'history', loadChildren: '../history/history.module#HistoryPageModule' },
      { path: 'accountslanding', loadChildren: '../accountslanding/accountslanding.module#AccountslandingPageModule' },
      { path: 'media', loadChildren: '../media/media.module#MediaPageModule',data: { preload: true } },
      { path: 'reset-password', loadChildren: '../reset-password/reset-password.module#ResetPasswordPageModule' },
      { path: 'sendmail-reset/:id', loadChildren: '../sendmail-reset/sendmail-reset.module#SendmailResetPageModule' },
      { path: 'preview-media/:id', loadChildren: '../preview-media/preview-media.module#PreviewMediaPageModule' },
      { path: 'shop', loadChildren: '../shop/shop.module#ShopPageModule' },
     // { path: 'confirmation-modal', loadChildren: './confirmation-modal/confirmation-modal.module#ConfirmationModalPageModule' },
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
    RouterModule.forChild(routes,)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
