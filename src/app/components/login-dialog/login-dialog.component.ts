import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  state: {[k: string]: any};
  loginDetails: LoginDetails;
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {
    this.loginDetails = {
      userName: '',
      password: ''
    };
    this.state = {
      userMinLength: 4,
      userMaxLength: 10,
      pwdMinLength: 5,
      pwdMaxLength: 15
    };
  }

  ngOnInit() {
  }

}

interface LoginDetails {
  userName: string;
  password: string;
}
