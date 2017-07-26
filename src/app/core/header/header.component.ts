import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthService, private router: Router) { }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/sign-in']);
  }

}
