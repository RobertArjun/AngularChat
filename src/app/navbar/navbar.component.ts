import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  useremail: string;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.user = this._authService.authUser();
    this.user.subscribe( user => {
        if (user) {
            this.useremail = user.email;
            console.log('helloo ' + this.useremail);
        }
    });
  }
  logout() {
    this._authService.logout();
  }
}
