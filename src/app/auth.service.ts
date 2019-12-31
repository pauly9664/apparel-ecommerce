import { Injectable } from '@angular/core';
import { Platform, AlertController, PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ConfirmationPopoverPage } from './confirmation-popover/confirmation-popover.page';
import { Http, Headers } from '@angular/http';



const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  paymentUrl = environment.mpesaUrl;
  user = null;
  contact = null;
  authenticationState = new BehaviorSubject(false)

  constructor(private http: HttpClient, private popoverController: PopoverController, private helper: JwtHelperService, private storage: Storage, private plt: Platform, private alertController: AlertController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
    
  }
  register(credentials) {
    // if(credentials){
    //   console.log(credentials);
    // }
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials).pipe(
      tap(res => {
        this.storage.set(TOKEN_KEY, res['token']);
        this.user = this.helper.decodeToken(res['token']);
        this.authenticationState.next(true);
      }),
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  saveFeedback(contact) {
    return this.http.post(`${this.url}/api/contact`, contact).pipe(
        catchError(e => {
          this.showAlert(e.error.msg);
          //this.authenticationState.next(false);
          throw new Error(e); 
        })
      ); 
  }
  updateSales(sale){
    return this.http.post(`${this.url}/api/postSales`, sale).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  
  postItems(item) {
    return this.http.post(`${this.url}/api/postItems`, item).pipe(
        catchError(e => {
          this.showAlert(e.error.msg);
          //this.authenticationState.next(false);
          throw new Error(e); 
        })
      );
  }
  getItems(){
    return this.http.get(`${this.url}/api/getItems`);
  }
  lipaMpesaOnline(){
    return this.http.get(`${this.url}/api/mpesa`)
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status == 401) {
          this.showAlert('No authorization in this level');
          this.logout();  
          this.authenticationState.next(false);
        }
        throw new Error(e);
      })
    )
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
  getSalesActivities(){
    return this.http.get(`${this.url}/api/getPastActivities`);
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error, Please try again',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
  // async loginPopover(ev: Event){
  //   const popover = await this.popoverController.create({
  //     component: Loginmponent, 

  //   });
  //   popover.present();
  // }
}
