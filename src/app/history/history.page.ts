import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  accountsbyid = undefined;
  data = null;
  loggedInUser = '';
  constructor(private authenticator: AuthService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    // this.loggedInUser = this.activatedRoute.snapshot.paramMap.get('user_id');
      this.authenticator.getSalesActivities().subscribe(res => {
        this.data = res['msg'];
        this.accountsbyid = JSON.stringify(res['accounts']);
      // console.log(this.accountsbyid);
      })
  }

}
