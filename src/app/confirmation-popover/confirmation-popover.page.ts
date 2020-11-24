import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShoppersCartService } from '../shoppers-cart.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-confirmation-popover',
  templateUrl: './confirmation-popover.page.html',
  styleUrls: ['./confirmation-popover.page.scss'],
})
export class ConfirmationPopoverPage implements OnInit {
  passedDelivery = null;
  passedPayment = null;
  totalCartItems = null;
  loggedInUser = null;
  acc_token = null;
  arrObj:any = [];
  arrArr:any = [];
  salesForm: FormGroup;
  cart=[] 
  productsForm : FormGroup;
   desc='';
   id:any
   category:any;
   amount:any;
   price:any;
   count:any;
   setval:any;
   viewer = 0;

   value:any;
  constructor(private navParams: NavParams, private shoppercart: ShoppersCartService, private alertCtrl: AlertController, private formBuilder: FormBuilder, private formBuild: FormBuilder, private popoverController: PopoverController, private authService: AuthService) {
   }
   
  ngOnInit() {
    
    this.passedDelivery = this.navParams.get('delivery_id');
    this.passedPayment = this.navParams.get('payment_id');
    this.totalCartItems = this.navParams.get('total_id');
    this.loggedInUser = this.navParams.get('user_id');
    this.cart = this.shoppercart.getCart();
    // for (let i = 0, len = this.cart.length; i < len; i++) {
    //   
    //   }
    this.cart.forEach((element, index, array) => {
      // this.desc = element.description; // 100, 200, 300
   // let data = this.cart.filter(obj =>{return Object.values(obj.description)});
  //  let arrObj =  [];
  //  this.desc.push(element.description);
  
  //  this.desc = element.description;
   this.id = element._id;
   this.category = element.category;
   this.price = element.price;
   this.amount = element.amount;
   this.count = element.count;
   this.arrObj.push(element.description + ' - ' + element.price);
   this.arrArr.push(element._id);
  // this.desc = JSON.stringify(this.arrObj);
  this.desc = this.arrObj.toString();
   console.log('Yeeee', typeof this.arrObj); 
    });
    
       //this.shoppercart.postCart(this.desc).subscribe();
      // console.log(typeof item.description,'X', item.amount,'=',item.price * item.amount);
    // });  
   // console.log(this.desc);
    this.salesForm = this.formBuilder.group({
      amount: [this.totalCartItems],
      delivery_status: [this.passedPayment],
      payment_status: [this.passedDelivery],
      user_id: [this.loggedInUser],
      description: [this.arrObj],
      viewed_status: [this.viewer],
      // object_id: [this.arrArr]
      
    });
    this.productsForm = this.formBuild.group({
      description: [this.desc],
      delivery_status: [this.passedPayment],
      payment_status: [this.passedDelivery],
      user_id: [this.loggedInUser],
      
    });
    console.log('this desc', this.desc)

    this.setval = this.salesForm.get('description').setValue(this.desc);
    this.setval = this.salesForm.get('user_id').setValue(this.loggedInUser);
    this.setval = this.salesForm.get('amount').setValue(this.totalCartItems);
    this.setval = this.salesForm.get('delivery_status').setValue(this.passedDelivery);
    this.setval = this.salesForm.get('payment_status').setValue(this.passedPayment);
    this.setval = this.salesForm.get('viewed_status').setValue(this.viewer)
  
      
  }
  saleUpdate() {
    console.log(this.salesForm.value);
    this.authService.updateSales(this.salesForm.value).subscribe();
  }
  postToMail(){
    this.shoppercart.postCart(this.salesForm.value).subscribe();
    // const  productUpload = new FormData();
   
    // let gokart = JSON.stringify(this.cart);
    // console.log("description", this.desc);
    // console.log("this one, look", gokart);
    // productUpload.append('description', this.setval);
    // productUpload.append('amount', this.productsForm.get('amount').value);
    // productUpload.append('count', this.productsForm.get('count').value);
    // productUpload.append('category', this.productsForm.get('category').value);
    // productUpload.append('price', this.productsForm.get('price').value);
    // productUpload.append('item', this.productsForm.get('item').value);
    // console.log('checkout what is being sent', productUpload)
    //   this.shoppercart.postCart(productUpload).subscribe();
  }
  // refresh(){
  //   this.authService.getOauthToken().subscribe((res: any) =>{
  //     res.next();
  //   });
  // }
  mpesa(){
    this.authService.mpesaOauth().subscribe(res =>{
    });
  }
  lipaNow(){
    this.authService.lipaMpesaOnline().subscribe(res =>{
        this.acc_token = res['access_token'];
        console.log(this.acc_token);
    });
  }
  postToken(){
    this.authService.oauthTok(this.acc_token).subscribe();
  }
  closePopover(){
    this.popoverController.dismiss();
  }
  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your goods as soon as possible',
      buttons: ['OK']
    });
    alert.present();
  }
}
