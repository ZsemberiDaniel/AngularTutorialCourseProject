import { AuthService } from './../auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  showMessageTime = 3000;

  successSignUp = false;
  errorSignUp = false;
  errorMsg = '';

  constructor(private authSservice: AuthService) { }

  signUp(form: NgForm) {
    this.authSservice.signUpUser(form.value.email, form.value.password)
            .then(resolve => {
              form.reset();

              // show user the sign up was successful
              this.errorSignUp = false;
              this.successSignUp = true;
              setInterval(() => this.successSignUp = false, this.showMessageTime);
            })
            .catch(error => {
              this.errorSignUp = true;
              this.errorMsg = error.message;
            });
  }

}
