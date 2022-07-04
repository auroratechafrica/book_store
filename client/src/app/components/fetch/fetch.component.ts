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
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    .subscribe(res => {
        if(res){
        console.log(res)
      }

    });

  }

}
