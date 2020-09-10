import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Divya";
  student = {
    name: "Mr.B",
    age: 24,
    rank: "A+"
  }

  textProperty = 'line-through';
  textColor = 'green';
  addClass = true;

  message = '';

  displayResult() {
    alert('Function Triggering..')
  }

}
