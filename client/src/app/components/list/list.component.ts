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

  constructor() {

  }

  ngOnInit(): void {
  }
  books: Book[] = BookData;
  book: any;
  total: number  = 0;

  disableOrEnable(id: string, disable = false) {
    let detail_btn = document.getElementById(id)
    if (disable) {
      // @ts-ignore
      detail_btn.setAttribute('disabled', true)
    } else  {
      // @ts-ignore
      detail_btn.setAttribute('disabled', false)
    }
  }


  checkout(book: Object) {
    // @ts-ignore
    if(book.available == true){
      alert('book is the basket. Happy shopping!')
      this.total += 1;
      // @ts-ignore
      document.getElementById('num-item').innerText = this.total
    }else{
      alert('This book is not available right now. Look to other books!')
    }
  }

}
