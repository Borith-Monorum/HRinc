import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HjNewsService {

  constructor(private http:HttpClient) { }
  NewsUrl="https://api.npoint.io/8e191d05f8297013c650";
  NewsApi():Observable<any> {
    return this.http.get(`${this.NewsUrl}`);
  }
}
