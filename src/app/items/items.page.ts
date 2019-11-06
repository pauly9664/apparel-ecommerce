import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  it = null;
  produce : any [];
  autoClose = false;
  constructor(private http: HttpClient) { 
    this.http.get('assets/products.json').subscribe(res =>{
      this.produce = res['products'];
      this.produce[0].open = true;
    })
  }

  toggleSection(index){
    this.produce[index].open = !this.produce[index].open;
    if(this.autoClose && this.produce[index].open){
      this.produce.filter((item, itemIndex) => itemIndex != index).map(item =>item.open=false);
    }
  }
  toggleItem(index, childIndex){
    this.produce[index].children[childIndex].open = !this.produce[index].children[childIndex].open;

  }
  ngOnInit() {
   
  }

}