import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {
  
  contactForm: FormGroup;
  url = environment.url;
  credentialsForm: FormGroup;
    

  constructor(public formBuilder: FormBuilder, private alertController: AlertController, private contactService:ContactService, private authService:AuthService) { 
  }
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', ],
      cell: ['',],
      feedback: ['',
      // [Validators.required, Validators.minLength(20)]
      ]
    });
  }
    onReply() {
    return this.contactService.saveFeedback(this.contactForm.value).subscribe();
 }
}