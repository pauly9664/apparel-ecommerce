import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NumberValidator } from  '../validators/Number';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validation_messages = {
    'names': [
        { type: 'required', message: 'Username is required.' },
        { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      //   { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      //   { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      //   { type: 'validUsername', message: 'Your username has already been taken.' }
      // ],
      // 'name': [
      //   { type: 'required', message: 'Name is required.' }
      ],
    
     //more messages
    }
  credentialsForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      names: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]],
      number: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10), NumberValidator.isValid]]
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
