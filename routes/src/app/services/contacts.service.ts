import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient : HttpClient) { }

  getData():Observable <Post> {
   const header  = new HttpHeaders({
    "content-type":"application/json",
    "authenticationToken":"12345"
   })

   const params = new HttpParams()
   .set('pagesNumber',15)
    return this.httpClient.get<Post>("https://my-json-server.typicode.com/typicode/demo/posts",{headers:header,params:params})

  }

}
