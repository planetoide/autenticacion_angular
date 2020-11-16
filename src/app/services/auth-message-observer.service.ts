import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthMessageObserverService {
  private subject = new Subject<any>();
  constructor() { }

  sendData(messageObj: any) {
    this.subject.next({Message  : messageObj});
  }

  clearData() {
    this.subject.next();
  }

  getData(): any {
    return this.subject.asObservable();
  }
}
