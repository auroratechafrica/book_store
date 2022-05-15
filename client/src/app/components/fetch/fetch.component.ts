import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  li:any;
  lis=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://books.cloudfoundry.com/data/authors')
    .subscribe(Response => {
 
      if(Response){ 
      }
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    });

  }

}
