import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, reduce } from 'rxjs';
import { Reddit } from './reddit';

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  red?: Reddit;
  urlBase: string = "http://www.reddit.com/r/aww/comments/";
  apiKey?:string = this.red?.permalink;
  
  /*[
    "hyts0n","s84idt","s8b1ud", "s86ekc", "s850go", "s7xy3f", "s80rh6", "s7vor5", "s7wsop", "s8czfv"
  ];*/

  constructor(private http: HttpClient) { };

  SearchPostByTitle(title:string) : Observable<Reddit> {
    let fullURL:string = `${this.urlBase}${title}`;
    let result: Observable<any> = this.http.get(fullURL);
    return result;
  }
}
