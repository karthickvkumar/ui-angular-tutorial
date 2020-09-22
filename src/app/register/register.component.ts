import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import * as Type from './register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Type.Model.RegisterForm = {
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    hobbies: [],
    address: '',
    city: ''
  }

  error: Type.Model.Error = {
    name: false,
    email: false,
    password: false,
    dob: false,
    gender: false,
    hobbies: false,
    address: false,
    city: false
  }

  userList: Type.Model.RegisterForm[] = [];

  constructor() { }

  ngOnInit() {
  }

  onRegister() {
    if (this.register.name == '') {
      this.error.name = true;
    } else {
      this.error.name = false;
    }

    if (this.register.email == '') {
      this.error.email = true;
    } else {
      this.error.email = false;
    }

    if (this.register.password == '') {
      this.error.password = true;
    } else {
      this.error.password = false;
    }

    if (this.register.dob == '') {
      this.error.dob = true;
    } else {
      this.error.dob = false;
    }

    if (this.register.gender == '') {
      this.error.gender = true;
    } else {
      this.error.gender = false;
    }

    if (this.register.hobbies.length == 0) {
      this.error.hobbies = true;
    } else {
      this.error.hobbies = false;
    }

    if (this.register.address == '') {
      this.error.address = true;
    } else {
      this.error.address = false;
    }

    if (this.register.city == '') {
      this.error.city = true;
    } else {
      this.error.city = false;
    }

    this.userList.push(this.register);
    this.register = {
      name: '',
      email: '',
      password: '',
      dob: '',
      gender: null,
      hobbies: [],
      address: '',
      city: ''
    }

  }

  onSelectGender(event) {
    this.register.gender = event.target.value;
  }

  onSelectCity(event) {
    this.register.city = event.target.value;
  }

  onSelectHobbies(event) {
    // console.log(event.target.value, event.target.checked)
    if (event.target.checked) {
      this.register.hobbies.push(event.target.value);
    }
    else {
      let index = this.register.hobbies.findIndex(function (value) {
        return value == event.target.value
      });
      this.register.hobbies.splice(index, 1);
    }

  }

}
