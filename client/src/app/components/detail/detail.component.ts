import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { default as  Books} from 'books.json';

interface Book {
  id: String;
  name: String;
  biography: String;
  image: String

}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  book: any | undefined;
  books: Book[] = Books;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('bookId'));
    // @ts-ignore
    this.book = this.books.find(book => book.id == bookIdFromRoute);
    console.log(this.book)
  }

}
