import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
  form!: FormGroup;
  nameControl = 'nameControl';
  emailControl = 'emailControl';

  ngOnInit():void{
this.form = new FormGroup({
  "nameControl" : new FormControl(),
  "emailControl" : new FormControl()
})
}

registerBtn(){
  console.log(this.form?.value)
}



}
