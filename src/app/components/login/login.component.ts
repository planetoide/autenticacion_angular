import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/models/auth-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AuthMessageObserverService } from 'src/app/services/auth-message-observer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new AuthModel("", "");
  submitted: boolean = false;
  onError: boolean = false;
  messageFromAuthService: string;
  constructor(public auth: AuthenticationService, public router: Router, private AuthMessageObserver: AuthMessageObserverService) { }

  ngOnInit(): void {
    var token = sessionStorage.getItem('token');
    if (token != null) {
      this.router.navigate(["/users"]);
    }
    this.AuthMessageObserver.getData().subscribe(observer => {
      console.log(observer);
      this.messageFromAuthService = observer.Message.error;
      console.log(this.messageFromAuthService)
    });
  }

  onLoggedin = (): void => {
    if (this.model.userName.trim().length == 0 || this.model.password.trim().length == 0) {
      this.onError = true;
    } else {
      this.onError = false;
      this.messageFromAuthService = '';
      console.table(this.model)
      this.auth.validateCredentials(this.model);
    }
  }

}
