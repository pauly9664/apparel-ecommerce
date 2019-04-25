import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  data = '';

  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController) {}

  ngOnInit() {

  }

  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['msg'];
    });
   }

  logout() {
    this.authService.logout();
}

clearToken() {
  //ONLY FOR TESTING
  this.storage.remove('access_token');

  let toast = this.toastController.create({
    message: 'Your token is deprecated',
    duration: 2000
  });
  toast.then(toast => toast.present());
}
}
