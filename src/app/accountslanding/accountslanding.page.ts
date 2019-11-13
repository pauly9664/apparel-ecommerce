import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accountslanding',
  templateUrl: './accountslanding.page.html',
  styleUrls: ['./accountslanding.page.scss'],
})
export class AccountslandingPage implements OnInit {
  data= undefined;
  accountsbyid = undefined;
  constructor(private authenticator: AuthService ) { }

  ngOnInit() {
    this.authenticator.getSalesActivities().subscribe(res => {
      this.data = res['msg'];
      this.accountsbyid = res['accounts'];
      this.accountsbyid[0].open = true;
    })
  }
  }


