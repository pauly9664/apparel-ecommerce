import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input('products') products :any;

  constructor( private toastCtrlr: ToastController) { }

  ngOnInit() {}
  async selectProduct(products) {
    let toast = await this.toastCtrlr.create({
      message: `You have selected ${products.name}`
    });
    toast.present();
  }
}
