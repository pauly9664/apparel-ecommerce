import { Injectable } from '@angular/core';
import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import {catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MediaFilesService {
  url = environment.url;
  constructor(public http: HttpClient, private transfer: FileTransfer) { }
  getPosts(){
    return this.http.get(this.url + '/images').pipe(
      catchError(e => {
        console.log(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletePost(img){
    return this.http.delete(this.url + '/images/:' + img._id);
  }
  uploadPost(img, desc){
    let newUrl = this.url + 'images';

    var options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      params: { 'desc': desc}
    }
    const fileTransfer = this.transfer.create();
    return fileTransfer.upload(img, newUrl, options);
  }
}
