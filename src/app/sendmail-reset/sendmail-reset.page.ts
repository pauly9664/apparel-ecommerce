import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {IonicPage} from 'ionic-angular'
import { NavParams, AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@IonicPage({
  name: 'sendmail-reset',
  segment: 'sendmail-reset/:id'
})
@Component({
  selector: 'app-sendmail-reset',
  templateUrl: './sendmail-reset.page.html',
  styleUrls: ['./sendmail-reset.page.scss'],
})
export class SendmailResetPage implements OnInit {
  credentialsForm: FormGroup;
  id:any;
  constructor(private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute, private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("URL ID", this.id)
    // this.navCtrl.navigateForward(['/menu/sendmail-reset', this.id]);
    // this.id = this.navParams.get('id');
    // console.log("ID", this.id);
    this.credentialsForm = this.formBuilder.group({
      id: [this.id],
      email: ['',  [Validators.required, Validators.email]],
      password: ['',]
    })
  }
  onSubmit(){
    this.authService.resetPassword(this.credentialsForm.value).subscribe();
  }
}
