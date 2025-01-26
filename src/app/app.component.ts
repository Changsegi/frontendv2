import { Component } from '@angular/core';
import {finalize} from 'rxjs';
import {environment} from '../environments/environment';
import {AuthService} from './services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontendv2';

  /* Authentication in base app? */
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    console.log("logged!");
    this.auth.testAuthenticate(undefined, undefined);

  }

  logout() {
    this.http.post(environment.baseUrl+'logout', {}).pipe( finalize(() => {
      this.auth.authenticated = false;
      this.auth.authorities = [];
      this.auth.username = '';
      this.router.navigateByUrl('/');
    })).subscribe();
  }
  /* Check on the upper level if user is authenticated, redirect to user page if necessary:  */
  authenticated() { return this.auth.authenticated; }
  userRole(role: string) { return this.auth.listContainsRole(role); }
  getUsername() { return this.auth.username; }
  getRoles() {
    return this.auth.authorities;
  }



  isAuthenticated() {
    return this.auth.authenticated;
  }



}
