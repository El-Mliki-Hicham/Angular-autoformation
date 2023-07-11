import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  listData?:any;
  name?:string;
  constructor(private params : ActivatedRoute,private services : ContactsService){}

  ngOnInit():void{
    this.params.params.subscribe(value =>{
    console.log(value["name"])
    this.name = value['name']
  })


 this.services.getData().subscribe(value=>{
  this.listData = value
  console.log(value)
 },(err)=>{
  console.log("unable to get data from URL" +err)
 }
 )

  }
}
