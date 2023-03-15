import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksDataService } from 'src/app/services/books-data.service';
import { Location } from '@angular/common';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  bookID!: any
  book: any
  constructor(private booksData: BooksDataService, private activateRoute: ActivatedRoute, private location:Location, private orders:OrdersService) {

  }
  ngOnInit(): void {
    this.bookID = this.activateRoute.snapshot.paramMap.get('id');
    this.book = this.booksData.getBookByID(this.bookID);
    
  }
  back(){
    this.location.back();
  }
}
