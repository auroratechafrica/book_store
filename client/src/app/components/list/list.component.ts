import { Component, OnInit } from '@angular/core';
import { default as  BookData} from 'book.json';

interface Book {
  id: String;
  name: String;
  biography: String;
  image: String

}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books: Book[] = BookData;

  detail(book: Object) {
    // @ts-ignore
    let container = document.getElementById('container-' + book.name)
    let book_bio = document.createElement('p')
    // @ts-ignore
    book_bio.innerHTML = book.biography
    // @ts-ignore
    container.appendChild(book_bio)
  }

  checkout(book: Object) {
    // @ts-ignore
      alert(`it is ${book.available ? '' : 'not'} available`)
  }
}
