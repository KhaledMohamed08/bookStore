import { Component, Output } from '@angular/core';
import { BooksDataService } from 'src/app/services/books-data.service';
import { Books } from 'src/app/viewModels/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Output() books:Books[] = []
  book:Books[]=[]


  constructor(private bookser:BooksDataService){
    this.book = bookser.books
  }
}
