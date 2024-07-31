import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey: string = '7ef7fbc7a06f49f88fdb8cba3f2beebc';  // Replace with your NewsAPI key

  apiUrl: string = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${this.apiKey}`;
  constructor(private http: HttpClient) { }
  getTopHeadlines(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
