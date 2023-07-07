import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
  export class TableComponent {
    name = '';
    email = '';
  data =[
    {"id":1 , "name": "hicham","email":"hicham@gmail.com"},
    {"id":2 , "name": "yahya","email":"yahya@gmail.com"},
    {"id":3 , "name": "imane","email":"imane@gmail.com"},
    {"id":4 , "name": "hasna","email":"hasna@gmail.com"},
    {"id":5 , "name": "adnan","email":"adnan@gmail.com"},
    {"id":6 , "name": "amin","email":" amin@gmail.com"},
  ]

  colorBlue = "blue";
  colorRed = "red";
  size = "20px";
  showName(id : number){
    var index = this.data.findIndex(item => item.id === id)
    console.log(index)
     this.data.splice(index,1)
  }

  addContact(name:string,email:string){
    console.log(name,email)
     var id = this.data.length +1
    this.data.push({"id":id,"name":name, "email": email})
   this.name = " ";
   this.email=" ";
  }

  }
