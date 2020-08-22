import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendmailResetPage } from './sendmail-reset.page';
import { IonicPageModule } from 'ionic-angular';

const routes: Routes = [
  {
    path: '',
    component: SendmailResetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // IonicPageModule.forChild(SendmailResetPage),
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [SendmailResetPage],
  // entryComponents: [SendmailResetPage]
})
export class SendmailResetPageModule {}
