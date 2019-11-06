import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  @Input('accounts') accounts :any;

  constructor( private toastCtrlr: ToastController) { }

  ngOnInit() {}
  async selectProduct(accounts) {
    let toast = await this.toastCtrlr.create({
      message: `You have selected ${accounts.name}`
    });
    toast.present();
  }
}