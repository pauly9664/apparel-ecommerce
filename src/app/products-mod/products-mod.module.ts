import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [ProductsComponent]
})
export class ProductsModModule { }
