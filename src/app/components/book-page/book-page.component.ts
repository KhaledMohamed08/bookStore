import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksDataService } from 'src/app/services/books-data.service';
import { Books } from 'src/app/viewModels/books';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit{
  bookID!:any
  book:Books | undefined
  constructor(private bookser:BooksDataService, private activateRoute:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.bookID = this.activateRoute.snapshot.paramMap.get('id');

     this.book = this.bookser.getBookByID(this.bookID);

  }
}
