import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from '../models/auth-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  ROOT_URL = 'http://localhost:8080/auth';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

  constructor(public _http: HttpClient, private router: Router) { }

  validateCredentials(auth: AuthModel) {
    // auth.userName = 'Administrator';
    // auth.password = 'password12354';
    console.table(auth)
    this._http.post(this.ROOT_URL, auth, this.httpOptions).subscribe(result => {
      console.log(result)
      this.router.navigate(["/users"]);
      let response: any = result;
      sessionStorage.setItem('token', response.token);
    });
  }

  isValid() {
    var token = sessionStorage.getItem('token');
    return token != null;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }
}
