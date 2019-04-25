import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'shoppers-cart', loadChildren: './shoppers-cart/shoppers-cart.module#ShoppersCartPageModule' },
  { path: 'main-shop', loadChildren: './main-shop/main-shop.module#MainShopPageModule' },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
