import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accountslanding',
  templateUrl: './accountslanding.page.html',
  styleUrls: ['./accountslanding.page.scss'],
})
export class AccountslandingPage implements OnInit {
  name= '';
  number= '';
  _id='';
  email= undefined;
  accountsbyid = undefined;
  parsedAccount = undefined;
  constructor(private authenticator: AuthService, private storage: Storage ) { }

  ngOnInit() {
    
    // this.authenticator.getSalesActivities().subscribe(res => {
    //   // this.accountsbyid = JSON.stringify(res['accounts']);
    //   // let parsedData = JSON.parse(this.accountsbyid);
    //   // this.parsedAccount = parsedData;
    //   // this.accountsbyid[0].open = true;
    //   // let accountsarray = Object.keys(this.accountsbyid[0]);
    //   // console.log(this.accountsbyid[0]);
    // })
    this.authenticator.getSpecialData().subscribe(res =>{
      this.name = res['name'];
      this.number = res['number'];
      this.email = res['email'];
      this._id = res['id'];
      this.storage.set(this._id) 
    })
  }
  } 


