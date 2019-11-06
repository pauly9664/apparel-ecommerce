import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccountsComponent } from '../accounts/accounts.component';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AccountsComponent]
})
export class AccountsModModule { }
