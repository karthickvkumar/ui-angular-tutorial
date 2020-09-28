import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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

  todoList: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  listUser() {
    this.api.getUserList().subscribe((resposne) => {
      console.log(resposne)
    }, (error) => {
      console.log(error)
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
