import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  getData(): Observable<any>{
    return this._http.get('https://dummyjson.com/products/category/mens-shoes')
  }
}
