import { Component, OnInit } from '@angular/core';
import { MediaFilesService } from '../media-files.service';
import { ModalController, NavController, ActionSheetController, AlertController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { PreviewMediaPage } from '../preview-media/preview-media.page';
import { UploadMediaPage } from '../upload-media/upload-media.page';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { AuthService } from '../auth.service';
import { ShoppersCartService } from '../shoppers-cart.service';
import { element } from 'protractor';
import { debounceTime } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ViewProductPage } from '../view-product/view-product.page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
products:any=[];
product:any=[];
produce=[];
item:any;
productCategory = [];
items = [];
prods:any;
categorySelected = null;
searchControl:FormControl;
contactForm: FormGroup;
  price: any;
  pricesCart = [];
  constructor(private productsService: ShoppersCartService,private modalCtrl: ModalController, private loadingController: LoadingController ) { 
    //  this.queryProductsData();
     this.filterAgain();
    //  this.FilterArrayObjects(Event);
    this.searchControl = new FormControl();
  }
  ngOnInit() {
  this.queryOnBrowse();
  
  }
   FilterArrayObjects(ev:any){
    this.prods = ev.target.value;
    console.log("event data",this.prods);
    if(this.prods && this.prods.trim() != ''){
      this.products = this.products.filter((item)=>{
        // this.productCategory.push(item.category);
        
        return(item.description.toLowerCase().indexOf(this.prods.toLowerCase())>-1)
      })
    }
  }
  async filterItems(ev:any){
    // this.queryProductsData();
    // this.searchControl.valueChanges;
    this.categorySelected = ev.target.value;
    console.log("dropdown cat:",this.categorySelected);
    this.presentLoadingWithOptions()
        this.produce = this.products.filter(products=>
          products.category == this.categorySelected
          );
          // this.produce.push(this.products);
          console.log("this is iiiiiiit", this.produce);
}

queryOnBrowse(){
  this.productsService.getImages().subscribe(data => {
    this.products = data;
  })
}
filterAgain(){
  this.productsService.getCategories().subscribe(data => {
    this.product = data;
    console.log('Cats:', this.product)
    this.product.forEach((item)=>{
      console.log("Categories", item.description);
      // if(item.category.indexOf(value) ==)
        this.productCategory.push(item.description);
      
      });
  })
}
async openImage(img) {
  console.log(img)
  let modal = await this.modalCtrl.create({
    
    component: ViewProductPage, 
      componentProps:{
        img: img,
      }
    });
  modal.present();
}
filterByPrice(ev){
//  this.price = ev.target.value;
this.price = ev;
this.presentLoadingWithOptions();
this.produce = this.products.filter(item=>
  item.price < this.price
    // this.pricesCart.push(item); 
)
console.log("Price List", this.produce);
// for(this.price = 0; this.price > this.products.price; this.price++){

// }
// this.products = this.products.filter((items)=>{
//   items.price < this.price;
  // console.log('Built array', this.pricesCart)

// })

 console.log("What the price",this.price);
}
  queryProductsData() {
    // let categorySelected = ev.target.value;
    //this.filterItems(Event);
    // this.productsService.getCategories().subscribe(data => {
    //   this.product = data;
    //   console.log("Actual cat", this.product);
    
      
    this.products = this.products.filter(products=>
      products.category == this.categorySelected
      
      );
      console.log('Getting there', this.categorySelected)
     
    }
    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: "circles",
        duration: 500,
        message: 'Fetching...',
        // translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
}
