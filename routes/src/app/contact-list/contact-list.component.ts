import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  contacts?:any;
constructor(private Service:ContactsService ){}

ngOnInit(){
  this.Service.getData().subscribe(value=>{
    this.contacts = value
    console.log(value);

  })
  console.log()
}

DeleteContact(id:number){
  console.log(id);

  // this.Service.DeleteRow(id)
}
EditContact(id:number){
  console.log(id);

  // this.Service.DeleteRow(id)
}

}
