import { Component, ViewChild, OnInit } from '@angular/core';
//import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  data = '';
  

  slidesConfig = {
    autoplay: true,
    speed: 5000,
    pager: true
  }
  platform: any;


  constructor(//private authService: AuthService,
     private storage: Storage)
  {}

  ngOnInit() {

  }
//   logout() {
//     this.authService.logout();
// }
}
