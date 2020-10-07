import { Component, OnInit } from '@angular/core';
import * as Type from './login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeName: string = "Mr.A";
  employeeAge: number = 25;
  employeeStatus: boolean = true;

  data: Type.Model.LoginForm = {
    username: '',
    password: '',
    name: '',
    age: 0,
    status: false,
    address: {
      doorNo: 12,
      streetName: '',
      pinCode: 600021
    }
  }

  response: Type.Model.ResponsForm = {
    first_name: '',
    last_name: '',
    rank: {
      quateraly: '',
      halfyearly: '',
      annual: ''
    }
  }

  list: number[] = [10, 20, 30, 40];

  nameList: string[] = ['mr.a', 'mr.b', 'mr.c', 'mr.d'];

  statusList: boolean[] = [true, false]

  userList: Type.Model.UserForm[] = [
    { name: 'mr.a', score: 20 },
    { name: 'mr.b', score: 30 },
    { name: 'mr.c', score: 40 },
  ]

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(){
    if(true){
      this.router.navigateByUrl('/todo-list')
    }
  }

  displayName(): Type.Model.LoginForm {
    return this.data
  }

}
