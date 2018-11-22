import { Injectable } from '@angular/core';

/* add http */
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }
  getdata() {
    return this.http.get('https://api.myglamapp.pl/api/categories?language=EN');
  }
}
