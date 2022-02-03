import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx'
import { AlertController } from 'ionic-angular';
import { CacheService } from 'ionic-cache';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    // private oneSignal: OneSignal,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
    // private cache: CacheService,
    // private alertCtrl: AlertController
   
  ) 
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.cache.setDefaultTTL(60*60*12);
      this.auth.authenticationState.subscribe(state => {
        if(state) {
          this.router.navigate(['menu/home']);
        } 
        else{
          this.router.navigate(['menu/login']);
        }    
})  
  });
  }
  // pushNot(){
  //   this.oneSignal.startInit('28b8c6a5-c2cb-460b-82ac-3ede9979ba4a', '262477358584');
  //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

  //   this.oneSignal.handleNotificationReceived().subscribe(data =>{
  //     let msg = data.payload.body;
  //     let title = data.payload.title;
  //     let additionalData = data.payload.additionalData;
  //     this.showAlert(title, msg, additionalData.task)
  //   });
  //   this.oneSignal.handleNotificationOpened().subscribe(data => {
  //     let additionalData = data.notification.payload.additionalData;
  //     this.showAlert('Notification Seen!', 'You probably saw this', additionalData.task)

  //   });

  //   this.oneSignal.endInit();
  // }

  // async showAlert(title, msg, task){
  //   const alert = await this.alertCtrl.create({
  //     buttons: [
  //       {
  //         text: `Action: ${task}`,
  //         handler: () =>{
        
  //         }
  //       }
  //     ]
  //   })
  //   alert.present();
  // }
}
