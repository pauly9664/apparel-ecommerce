import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPopoverPage } from './confirmation-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmationPopoverPage]
})
export class ConfirmationPopoverPageModule {}
