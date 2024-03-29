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
  data = null;
  loggedInUser = '';
  pageOfItems: Array<any>;
  autoClose = false;
  accountsbyid = undefined;
  parsedAccount = undefined;
  constructor(private orders: AuthService, private activatedRoute: ActivatedRoute, public loadingController: LoadingController) { 
    this.orders.getSalesActivities().subscribe(res => {
      this.accountsbyid = res['accounts'];
      let parsedData = JSON.parse(this.accountsbyid);
      this.parsedAccount = parsedData;
      console.log("Parsed data", this.parsedAccount)
      // this.accountsbyid[0].open = true;
      let accountsarray = Object.keys(this.accountsbyid[0]);
      console.log(this.accountsbyid[0]);
    })
    
  }
  toggleSection(index){
    this.accountsbyid[index].open = !this.accountsbyid[index].open;
    if(this.autoClose && this.accountsbyid[index].open){
      this.accountsbyid.filter((item, itemIndex) => itemIndex != index).map(item =>item.open=false);
    }
  }
  orderDetail(){
    console.log('orders', this.parsedAccount);
   this.parsedAccount;
  }
  toggleItem(index, childIndex){
    this.accountsbyid[index].children[childIndex].open = !this.accountsbyid[index].children[childIndex].open;
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

  ngOnInit() { 
    // this.loggedInUser = this.activatedRoute.snapshot.paramMap.get('user_id');
    // this.orders.getSalesActivities().subscribe(res => {
    //   this.accountsbyid = JSON.stringify(res['accounts']);
    //   let parsedData = JSON.parse(this.accountsbyid);
    //   this.parsedAccount = parsedData;
    //   console.log("Parsed data", this.parsedAccount)
    //   // this.accountsbyid[0].open = true;
    //   let accountsarray = Object.keys(this.accountsbyid[0]);
    //   console.log(this.accountsbyid[0]);
    // })
    // this.orderDetails()
    
  }
  orderDetails(){
    this.orders.getSalesActivities().subscribe(res => {
      this.accountsbyid = JSON.stringify(res);
      let parsedData = JSON.parse(this.accountsbyid);
      this.parsedAccount = parsedData;
      // this.accountsbyid[0].open = true;
      let accountsarray = Object.keys(this.accountsbyid[0]);
      console.log(this.accountsbyid[0]);
    })
  }
}