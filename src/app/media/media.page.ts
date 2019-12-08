import { Component, OnInit } from '@angular/core';
import { MediaFilesService } from '../media-files.service';
import { ModalController, NavController, ActionSheetController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { PreviewMediaPage } from '../preview-media/preview-media.page';
import { UploadMediaPage } from '../upload-media/upload-media.page';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {
images = undefined;
  constructor( private imagesProvider: MediaFilesService, public nav: NavController, private camera: Camera, private actionSheetCtrl: ActionSheetController, private modalCtr: ModalController) { 
    this.reloadPosts();
  }
  ngOnInit() {
  }
   async openPost(ev: Event, img){
    let modal =  await this.modalCtr.create({
      component: PreviewMediaPage,
      componentProps:{
        img : img
      }
    });
       modal.present();
  }
  reloadPosts(){
    this.imagesProvider.getPosts().subscribe(data =>{
      this.images = data;
    })
  }
async presentActionSheet(){
  let actionSheet = this.actionSheetCtrl.create({
    buttons: [
      {
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use camera',
        handler: () =>{
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });
  (await actionSheet).present();
}
async takePicture(sourceType){
  var options = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  }
  this.camera.getPicture(options).then(async imagePath =>{
    let modal =  await this.modalCtr.create({
      component: UploadMediaPage,
      componentProps:{
        data : imagePath
      }
    });
     modal.present();
    modal.onDidDismiss()
  });
}

}
