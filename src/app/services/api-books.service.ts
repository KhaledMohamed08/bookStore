import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiBooks, Books} from '../viewModels/books';

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {

  constructor(private _httpClient:HttpClient) {  }

  getAllBooks():Observable<apiBooks>{
    return this._httpClient.get<apiBooks>("http://localhost:8000/books")
  }
  getBookByID(id:number):Observable<Books>{
    return this._httpClient.get<Books>(`http://localhost:8000/books/${id}`)
  }
}
