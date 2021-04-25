import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
//import { Injectable } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = environment.url;
  authenticator = new BehaviorSubject<boolean>(false);
  contact = null;
  
  constructor(private http: HttpClient, private alertController: AlertController, private plt: Platform) {
   }
  // register(credentials) {
  //   return this.http.post(`${this.url}/api/register`, credentials).pipe(
  //     catchError(e => {
  //       this.showAlert(e.error.msg);
  //       throw new Error(e);
  //     })
  //   );
  // }
  // tokenizer(){
  //    this.authenticator.next(false);
  // }
  saveFeedback(contact) {
    return this.http.post('/api/contact', contact)
    .pipe(
      catchError(e => {
        this.showAlert('Error');
        this.authenticator.next(false);
        throw new Error(e); 
      })
    
    );
  }
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error, Please try again',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
