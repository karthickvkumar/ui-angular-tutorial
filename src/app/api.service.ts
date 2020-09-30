import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "https://reqres.in";

  constructor(private http: HttpClient) { }

  getUserList() {
    let url: string = this.baseURL + '/api/users?page=2';
    return this.http.get(url);
  }

  postUserInfo(data) {
    let url: string = this.baseURL + "/api/users";
    return this.http.post(url, data)
  }

  updateUser(data) {
    let url: string = this.baseURL + '/api/users/2';
    return this.http.put(url, data)
  }

  deleteUser() {
    let url: string = this.baseURL + "/api/users/2";
    return this.http.delete(url);
  }

}
