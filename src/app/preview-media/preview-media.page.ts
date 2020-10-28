import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-preview-media',
  templateUrl: './preview-media.page.html',
  styleUrls: ['./preview-media.page.scss'],
})
export class PreviewMediaPage implements OnInit {
  order:any;
  orderDetails:any
  orderDetail:any;
  payment = [];
  delivery = [];
  dday = [];
  amount = [];

  constructor(private activatedRoute: ActivatedRoute, private orders: AuthService, private loadingController: LoadingController) {
  
  }

  ngOnInit() {
    this.order = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllOrders();
  }
  getAllOrders(){
    this.orders.getSalesActivity().subscribe(res => {
      this.orderDetails = res;
      console.log("These are all orders", this.orderDetails)
     
    });
}
getDetails(){
  this.orderDetail = this.orderDetails.filter(orders=>{
    return orders._id == this.order;
    // console.log("This is the obj", orders);
  })
  // this.router.navigate(['/orderview/', this.order]);
  this.orderDetail.forEach((order =>{
    this.payment.push(order.payment_status);
    this.delivery.push(order.delivery_status);
    this.amount.push(order.amount);
    this.dday.push(order.buying_date);

    console.log("Returned payment", this.payment)
  }))
 
 }
 async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: "circles",
    duration: 500,
    message: 'Fetching...',
    // translucent: true,
    cssClass: 'custom-class custom-loading'
  });
  return await loading.present();
}

}
