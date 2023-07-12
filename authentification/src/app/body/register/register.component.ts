import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
  form!: FormGroup;
  nameControl = 'nameControl';
  emailControl = 'emailControl';
  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{

const composeV = Validators.compose([Validators.required])

this.form = this.formBuilder.group({
  "nameControl" : new FormControl("",composeV),
  "emailControl" : new FormControl('',[
   Validators.required,
   Validators.email
    ])
    , "email":new FormControl()
  })
const hello= {
  //  'nameControl':"hello",
   'emailControl':"helloeamil"
 }
 // for set all the keys
// this.form.setValue(hello)
 //for set just keys exist in the form
this.form.patchValue(hello)


//show status of  input // is valide or not valide
this.form.get("emailControl")?.statusChanges.subscribe(data => {
  console.log(data)
})

}


registerBtn(){
  //get FormControl
  console.log(this.form?.get('nameControl')?.value)
}
onChange( ){
  this.form.valueChanges.subscribe(data =>{
    console.log(data.nameControl)
  })

}





}
