import { Component, OnInit } from '@angular/core';
import { studentModel } from './directive-model';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  visible: boolean = true;
  studentList: studentModel[] = [
    {
      name: 'Mr.A',
      class: '6th',
      score: 80
    },
    {
      name: 'Mr.B',
      class: '7th',
      score: 50
    },
    {
      name: 'Mr.C',
      class: '5th',
      score: 30
    },
    {
      name: 'Mr.D',
      class: '8th',
      score: 40
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }

}
