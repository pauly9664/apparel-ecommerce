import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentialsForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      names: ['', [Validators.required, Validators.minLength(5)]],
      number: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  register() {
    this.authService.register(this.credentialsForm.value).subscribe(
     res => {
    //   //Call Login to automaticallyy login new user
        this.authService.login(this.credentialsForm.value).subscribe();
     }
    );
  }
}
