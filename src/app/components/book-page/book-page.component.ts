import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksDataService } from 'src/app/services/books-data.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  bookID!: any
  book: any
  constructor(private booksData: BooksDataService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.bookID = this.activateRoute.snapshot.paramMap.get('id');

    this.book = this.booksData.getBookByID(this.bookID);

  }
}
