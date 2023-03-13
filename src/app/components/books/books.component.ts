import { Component, Output } from '@angular/core';
import { Books } from 'src/app/viewModels/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Output() books:Books[] = []

  constructor(){
    this.books = [
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
      {id:1, name:"Book Name", title:"this contain a little description of the book", writer:"Writer Name", img:"https://picsum.photos/400/300", price:50},
    ]
  }
}
