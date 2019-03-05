import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private loginSource = new BehaviorSubject<boolean>(false);
  public loginStatus = this.loginSource.asObservable();
  constructor() { }

  changeLoginStatus(value: boolean) {
    this.loginSource.next(value);
  }
}
