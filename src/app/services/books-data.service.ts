import { Injectable } from '@angular/core';
import { Books } from '../viewModels/books';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {
  books:Books[]
  constructor() { 
    this.books = [
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:2, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:3, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:4, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:5, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:6, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:7, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:8, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:9, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:10, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
    ]
   }

   getAllBooks(){
    return this.books;
   }
   getBookByID(id:number):Books | undefined{
    return this.books.find(ele=>ele.id == id)
   }
}
