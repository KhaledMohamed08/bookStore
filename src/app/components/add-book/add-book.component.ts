import { Component, OnInit } from '@angular/core';
import { ApiBooksService } from 'src/app/services/api-books.service';
import { Router } from '@angular/router';
import { apiBooks, Books, cat, category, writer } from 'src/app/viewModels/books';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  categories:any;
writer:writer[]=[]
  book!: apiBooks
  books:Books={} as Books

  constructor(private bookserv:ApiBooksService, public categorysevice:CategoryService,private router:Router){}


  ngOnInit(): void {
    this.categorysevice.getallcategory().subscribe({
      next:(res)=>{
        console.log(res)
        this.categories=res.data

      }
    })
    }
  savebook(){

      this.bookserv.saveNewBook(this.book).subscribe({
        next:(res)=>{
          this.router.navigate(['/home'])
        }
      })
    }
}
