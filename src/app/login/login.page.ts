import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;
  data = null;
  //contactForm: FormGroup;

  constructor(public nav: NavController, public formBuilder: FormBuilder, private authService: AuthService) { }
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe();
  //   this.authService.getSpecialData().subscribe(res => {
  //     this.data = res['msg'];
  //     this.user_id = res['id'];
  // })
  }
  // pushUserId(){  
  // this.nav.navigateForward(`menu/home${this.user_id}`);
  // }
}