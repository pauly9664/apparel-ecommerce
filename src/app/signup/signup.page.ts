import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username:string=""
  password:string=""
  cpassword:string=""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async signup() {
    const { username, password, cpassword } = this
    if(password !== cpassword) {
      return console.error("Error!Please retype passwords")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username +'@gitau.com', password)
      console.log(res)
    }catch(error) {
      console.dir(error)
    }
  }

}
