import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './default-home.component.html',
  template: "<h1>welcome to home</h1>",
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent {

   name : String = "function";
   num1 = 50 ;
   num2 = 30 ;
  array = [2,4,0,34,3];

  ngOnInit(): void {
    this.callFunction()
    this.sum(this.num1,this.num2)
    this.list(this.array)

  }

  callFunction(){
    console.log( this.name + " component");

  }

  list(array:Array<Number>){

    for(let x = 0; x <array.length ; x++)
      console.log(array[x])
  }

  sum(num1:Number ,num2:Number){
    if(num1 <num2) {
      console.log("error")
    }else{
      console.log("valide")
    }

  }

}
