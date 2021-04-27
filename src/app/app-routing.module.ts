import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'shoppers-cart', loadChildren: './shoppers-cart/shoppers-cart.module#ShoppersCartPageModule' },
  { path: 'main-shop', loadChildren: './main-shop/main-shop.module#MainShopPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'view-product', loadChildren: './view-product/view-product.module#ViewProductPageModule' },
  { path: 'confirmation-modal', loadChildren: './confirmation-modal/confirmation-modal.module#ConfirmationModalPageModule' },
  { path: 'login-popover', loadChildren: './login-popover/login-popover.module#LoginPopoverPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'accountslanding', loadChildren: './accountslanding/accountslanding.module#AccountslandingPageModule' },
  { path: 'media', loadChildren: './media/media.module#MediaPageModule' },
  { path: 'preview-media', loadChildren: './preview-media/preview-media.module#PreviewMediaPageModule' },
  { path: 'sendmail-reset', loadChildren: './sendmail-reset/sendmail-reset.module#SendmailResetPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },  { path: 'shop', loadChildren: './shop/shop.module#ShopPageModule' },


  //{ path: 'confirmation-popover', loadChildren: './confirmation-popover/confirmation-popover.module#ConfirmationPopoverPageModule' },



  


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
