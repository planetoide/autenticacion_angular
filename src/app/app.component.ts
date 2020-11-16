import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
// import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nueva';

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }
}
