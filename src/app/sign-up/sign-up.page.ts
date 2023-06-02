import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage{
  showpassword=true;
  passwordToggleIcon= '';
  constructor() {}

  togglepassword():void {
    this.showpassword = !this.showpassword;

  } 
}
