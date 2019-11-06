import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  accountsbyid: any[];
  data = null;
  loggedInUser = '';
  autoClose = false;
  constructor(private authenticator: AuthService, private activatedRoute: ActivatedRoute, public loadingController: LoadingController) { 
    this.authenticator.getSalesActivities().subscribe(res => {
      this.data = res['msg'];
      this.accountsbyid = res['accounts'];
      this.accountsbyid[0].open = true;
    })
  }
  toggleSection(index){
    this.accountsbyid[index].open = !this.accountsbyid[index].open;
    if(this.autoClose && this.accountsbyid[index].open){
      this.accountsbyid.filter((item, itemIndex) => itemIndex != index).map(item =>item.open=false);
    }
  }
  toggleItem(index, childIndex){
    this.accountsbyid[index].children[childIndex].open = !this.accountsbyid[index].children[childIndex].open;
  }

  ngOnInit() { 
    // this.loggedInUser = this.activatedRoute.snapshot.paramMap.get('user_id');
      this.authenticator.getSalesActivities().subscribe(res => {
        this.data = res['msg'];
        this.accountsbyid = res['accounts'];
        this.loggedInUser = res['id'];
      // console.log(this.accountsbyid);
      })
  }

}
