import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { IonicSelectableModule } from 'ionic-selectable';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ConfirmationModalPage } from './confirmation-modal/confirmation-modal.page';
import { ConfirmationModalPageModule } from './confirmation-modal/confirmation-modal.module';
import { ConfirmationPopoverPage } from './confirmation-popover/confirmation-popover.page';
import { ConfirmationPopoverPageModule } from './confirmation-popover/confirmation-popover.module';
import { LoginPopoverPageModule } from './login-popover/login-popover.module';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ViewProductPageModule } from './view-product/view-product.module';
import { ShoppersCartService } from './shoppers-cart.service';
import { ShoppersCartPageModule } from './shoppers-cart/shoppers-cart.module';
import { SendmailResetPageModule } from './sendmail-reset/sendmail-reset.module';
import { JwPaginationComponent } from 'jw-angular-pagination';
export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['preeti-fashion.herokuapp.com','192.168.100.11:8080','192.168.0.121:501','192.168.0.117:501','192.168.0.109:8080', '192.168.137.1:500', '192.168.0.109:501','192.168.0.122:501','192.168.200.154:500','192.168.200.187:500', '192.168.200.135:5000','192.168.100.35:8080','192.168.137.1:500', '192.168.0.118:500', '192.168.200.142:5000', '192.168.200.129:500', '192.168.100.35:8080','192.168.0.106:500', '192.168.8.118:500','192.168.200.140:500','192.168.100.11:500']
  }
}
@NgModule({
  declarations: [AppComponent, JwPaginationComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ViewProductPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
  
    IonicSelectableModule,
    ConfirmationModalPageModule,
    LoginPopoverPageModule,
    ConfirmationPopoverPageModule,
    ShoppersCartPageModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
}
    })
  ],

  providers: [
    Camera,
    FileTransfer,
    StatusBar,
 
    ShoppersCartService,
    
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
