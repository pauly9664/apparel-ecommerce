import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouterState } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history.page';
import { AccountsModModule } from '../accounts-mod/accounts-mod.module';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes
    //   [
    //   {
    //     path: '',
    //     component: HistoryPage
    //   }
    // ]
    ),
    // AccountsModModule
    
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
