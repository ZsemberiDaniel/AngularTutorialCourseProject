import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  errorSignUp = false;
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) { }

  signIn(form: NgForm) {
    this.authService.signInUser(form.value.email, form.value.password)
          .then((resolve) => {
            form.reset();
            this.router.navigate(['/home']);
          })
          .catch((error: Error) => {
            this.errorSignUp = true;
            this.errorMsg = error.message;
          });
  }

}
