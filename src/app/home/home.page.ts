import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Storage } from '@ionic/storage';
import { ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  data = '';
  user_id = null;
  users = null;
  

  slidesConfig = {
    autoplay: true,
    speed: 5000,
    pager: true
  }
  platform: any;

  constructor(private authService: AuthService, private nav: NavController, private router: Router, private storage: Storage, private activatedRoute:ActivatedRoute)
  {}

  ngOnInit() { 
    // this.overallCost = this.activatedRoute.snapshot.paramMap.get('totals');

    //  loadSpecialInfo() {
       this.authService.getSpecialData().subscribe(res => {
         this.data = res['msg'];
         this.user_id = res['id'];
         this.users = this.user_id;
        // console.log(this.users);
        //  return res;
         //console.log(this.data);
       });
  }
  logout() {
    this.authService.logout();
}
pushUser(){
  this.nav.navigateForward(`menu/history${this.users}`);
}
}
