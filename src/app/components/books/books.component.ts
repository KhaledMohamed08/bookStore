import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { BooksDataService } from 'src/app/services/books-data.service';
import { OrdersService } from 'src/app/services/orders.service';
import { Books } from 'src/app/viewModels/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
  book:Books[]=[]
  cartNum!:number
  
  constructor(booksData:BooksDataService){
    this.book = booksData.books
  }
  
 
}
