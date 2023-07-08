import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // loginStatus:boolean = true ;
  email: string ="" ;
  password: string ="" ;
  rememberMe: boolean =true ;


  login(formValue : NgForm){
    console.log(formValue.value)

  }
  restForm(formValue : NgForm){
      formValue.reset()
  }
  hello(){
    alert("helo fofo ")
  }
}
