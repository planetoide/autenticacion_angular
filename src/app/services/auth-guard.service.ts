import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth : AuthenticationService, private _router: Router) { }

  canActivate(): boolean {
    if (this.auth.isValid()) {
        return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}
