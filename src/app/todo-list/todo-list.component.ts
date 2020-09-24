import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
