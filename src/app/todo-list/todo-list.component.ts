import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as Type from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoMessage: any = {
    text: '',
    isCompleted: false
  };

  userForm: any = {
    name: '',
    job: ''
  }

  todoList: any[] = [];

  userList :any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.listUser();
  }

  listUser() {
    this.api.getUserList().subscribe((resposne: Type.Model.ResponseData) => {
      console.log(resposne)
      this.userList = resposne.data;
    }, (error) => {
      console.log(error)
    })
  }

  submitForm() {
    // this.api.postUserInfo(this.userForm).subscribe((resposne) => {
    //   console.log(resposne)
    // }, (error) => {
    //   console.log(error)
    // })
    this.api.updateUser(this.userForm).subscribe((resposne) => {
      console.log(resposne)
    }, (error) => {
      console.log(error)
    })
  }

  onDeleteUser() {
    this.api.deleteUser().subscribe((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }

  addToDo() {
    if (this.todoMessage.text != '') {
      this.todoList.push(this.todoMessage);
      this.todoMessage = {
        text: '',
        isCompleted: false
      };
    } else {
      alert("Please enter a ToDo Message")
    }
  }

  onComplete(todo) {
    console.log(todo)
    todo.isCompleted = !todo.isCompleted;
  }

  onDelete(index) {
    this.todoList.splice(index, 1)
  }

}
