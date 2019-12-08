import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'shoppers-cart', loadChildren: './shoppers-cart/shoppers-cart.module#ShoppersCartPageModule' },
  { path: 'main-shop', loadChildren: './main-shop/main-shop.module#MainShopPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'shoes', loadChildren: './shoes/shoes.module#ShoesPageModule' },
  { path: 'suits', loadChildren: './suits/suits.module#SuitsPageModule' },
  { path: 'bags', loadChildren: './bags/bags.module#BagsPageModule' },
  { path: 'other-items', loadChildren: './other-items/other-items.module#OtherItemsPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'view-product', loadChildren: './view-product/view-product.module#ViewProductPageModule' },
  { path: 'confirmation-modal', loadChildren: './confirmation-modal/confirmation-modal.module#ConfirmationModalPageModule' },  { path: 'items', loadChildren: './items/items.module#ItemsPageModule' },
  { path: 'login-popover', loadChildren: './login-popover/login-popover.module#LoginPopoverPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'accountslanding', loadChildren: './accountslanding/accountslanding.module#AccountslandingPageModule' },
  { path: 'media', loadChildren: './media/media.module#MediaPageModule' },
  { path: 'upload-media', loadChildren: './upload-media/upload-media.module#UploadMediaPageModule' },
  { path: 'preview-media', loadChildren: './preview-media/preview-media.module#PreviewMediaPageModule' },

  //{ path: 'confirmation-popover', loadChildren: './confirmation-popover/confirmation-popover.module#ConfirmationPopoverPageModule' },



  


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
