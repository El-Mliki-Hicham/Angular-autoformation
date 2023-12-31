import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient : HttpClient) { }

  getData():Observable <User> {
   const header  = new HttpHeaders({
    "content-type":"application/json",
    "authenticationToken":"12345"
   })

   const params = new HttpParams()
   .set('pagesNumber',15)
    return this.httpClient.get<User>("http://localhost:8000/users",{headers:header,params:params})

  }

  storeData(body:any){
   return  this.httpClient.post('http://localhost:8000/users',body)
  }

  DeleteRow(id:number){

   return  this.httpClient.delete('http://localhost:8000/users/'+id)
  }

  GetDataById(id:any):Observable<User>{

   return  this.httpClient.get<User>('http://localhost:8000/users/'+id)
  }

  Update(id:any, value:any){
    return this.httpClient.put('http://localhost:8000/users/'+id,value)
  }

  Searsh(name:any):Observable<User>{
  var params = new HttpParams().set("name_like",name)

   return  this.httpClient.get<User>('http://localhost:8000/users/',{params:params})

  }
  Filtre(name:any):Observable<User>{
    if (name == "") {
      var params = new HttpParams().set("status_like",name)
    }else{
  var params = new HttpParams().set("status",name)
}

   return  this.httpClient.get<User>('http://localhost:8000/users/',{params:params})

  }

}

