import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  loginStatus:boolean= true;
  registerStatus:boolean= false;
goToLogin() {
  this.loginStatus= true
  this.registerStatus= false
}

goToRegister() {
  this.loginStatus= false
  this.registerStatus= true
}

}
