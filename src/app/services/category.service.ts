import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../viewModels/books';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

//   constructor() { public httpclient:HttpClient}


// getallcategory():Observable<category[]>{
//   return this.httpclient.get<category[]>("http://localhost:8000/categories")
// }

// }
constructor(public httpclient:HttpClient) { }

getallcategory():Observable<category[]>{
return  this.httpclient.get<category[]>("http://localhost:8000/categories")

}
}
