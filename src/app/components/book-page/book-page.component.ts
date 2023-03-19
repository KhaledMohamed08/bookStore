import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksDataService } from 'src/app/services/books-data.service';
import { Location } from '@angular/common';
import { OrdersService } from 'src/app/services/orders.service';
import { ApiBooksService } from 'src/app/services/api-books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  bookID!: any
  book: any
  sub: Subscription | undefined
  constructor(private booksData: BooksDataService, private activateRoute: ActivatedRoute, private location:Location, public order:OrdersService, private apiBooks:ApiBooksService) {

  }
  ngOnInit(): void {
    this.bookID = this.activateRoute.snapshot.paramMap.get('id');
    // this.book = this.booksData.getBookByID(this.bookID);
    this.sub =  this.apiBooks.getBookByID(this.bookID).subscribe({
      next:(res)=>{
        this.book = res
        
      }
    })
    
  }
  back(){
    this.location.back();
  }
  x(){
    this.order.addOrder()
  }
}
