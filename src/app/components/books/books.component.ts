import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { ApiBooksService } from 'src/app/services/api-books.service';
import { BooksDataService } from 'src/app/services/books-data.service';
import { OrdersService } from 'src/app/services/orders.service';
import { apiBooks, Books } from 'src/app/viewModels/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  // book:Books[]=[]
  // cartNum!:number
  
  // constructor(booksData:BooksDataService){
  //   this.book = booksData.books
  // }
  allBooks:Books[] = [];
  constructor(private book:ApiBooksService){

  }
  ngOnInit(): void {
    this.book.getAllBooks().subscribe({
      next:(res)=>{
        this.allBooks = res.data
        
      },
      error:(err)=>{
        return err
      }
    })
  }
  
 
}
