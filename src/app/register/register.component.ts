import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import { RegisterForm } from './register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: RegisterForm = {
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    hobbies: [],
    address: '',
    city: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onRegister() {
    console.log(this.register)
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
