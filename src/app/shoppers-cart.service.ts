import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
export interface Product{
  _id: string;
  filename: string;
  description: string;
  price: number;
  category: string;
  count: number;
  created_at: Date; 
  url: string;
  amount: number;
  //  getImages();
  
}
export interface Categories{
  _id: string;
  description: string;
  created_at: Date;
}
@Injectable({
  providedIn: 'root'  
})
export class ShoppersCartService {
  url = environment.url;
  items:Observable<any>;
  //    data = [
  //   {
  //     category: 'US Dresses',
  //     expanded: 'true',
  //     products: [
  //       { id: 0, name: 'SLN Fashion', total: '8000', url:'assets/p4.jpg' },
  //       { id: 1, name: 'Ivanka Trump', total: '5000', url:'assets/p2.jpg' },
  //       { id: 2, name: 'Elen Tracy', total: '13500', url:'assets/p3.jpg' },
  //       { id: 3, name: 'Tommy Hilfiger', total: '12500', url:'assets/p4.jpg' }
  //     ]
  //   },
  //   {
  //     category: 'Turkey Dresses',
  //     products: [
  //       { id: 4, name: 'Izzet candan', total: '5000', url:'assets/p5.jpg' },
  //       { id: 5, name: 'La fiera', total: '9500', url:'assets/p6.jpg' },
  //       { id: 6, name: 'Visconi', total: '10500', url:'assets/p7.jpg' },
  //       { id: 7, name: 'Xmeric', total: '8500', url:'assets/p8.jpg'  }
  //     ]
  //   },
  //   {
  //     category: 'All tops',
  //     products: [
  //       { id: 8, name: 'Ali Yavuz', total: '2300', url: 'assets/p9.jpg' },
  //       { id: 9, name: 'Sioni ', total: '3500', url:'assets/p10.jpg' },
  //       { id: 10, name: 'Milano ', total: '2500', url:'assets/ssuit.jpg' },
  //       { id: 11, name: 'Vazi ', total: '3400', url:'assets/suit3.jpg' }
  //     ]
  //   }
  // ];
  // private sel = [];
  private cart=[];
  private cartItemCount = new BehaviorSubject(0);

  constructor(private http: HttpClient, private alertController: AlertController) { }
  // getSelect() {
  //   return this.sel;
  // }
  getImages(): Observable<Product> {
  return this.http.get<Product>('https://preeti-fashions-ad.herokuapp.com/api/images').pipe(map((response:Product)=> response)) ;
   }
   
   getImage(): Observable<Product> {
    return this.http.get<Product>('https://preeti-fashions-ad.herokuapp.com/api/images2').pipe(map((response:Product)=> response)) ;
     }

   getItems(){
     return this.http.get('/api/images');
   }
   getCategories(): Observable<Categories>{
    return this.http.get<Categories>('https://preeti-fashion.herokuapp.com/api/fetchCategories').pipe(map((response:Categories)=> response)) ;
   }
   showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error, Please try again',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
   postCart(order){
    return this.http.post('https://preeti-fashion.herokuapp.com/api/postSales', order)
    // .pipe(
    //   catchError(e => {
    //     this.showAlert(e.error.msg);
    //     throw new Error(e);
    //   })
    // );
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
  getCart() {
    return this.cart;
  }
  // addToView(product){
  // //   //  console.log('yes',this.sel);
  // //   this.sel.push(product);
  // // }
  addProduct(product) {
    
    let added = false;
    for (let p of this.cart) {
      if (p._id === product._id) {
        // console.log("Produce",product)
        p.amount += 1;
        console.log("p.amount", p.amount);
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  removeProduct(product) {
  
    for (let [index, p] of this.cart.entries()) {
      if (p._id) {
        console.log(product);
        //this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index,1);
      }
    }
  }
}
