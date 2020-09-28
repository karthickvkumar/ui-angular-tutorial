import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserList() {
    let url: string = 'https://reqres.in/api/users?page=2';
    return this.http.get(url);
  }

}
