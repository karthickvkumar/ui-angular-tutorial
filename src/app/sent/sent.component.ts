import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  studentList: any = [
    {
      name: 'Mr.A',
      score: 73,
      grade: "A"
    },
    {
      name: 'Mr.B',
      score: 52,
      grade: "C"
    },
    {
      name: 'Mr.C',
      score: 30,
      grade: "U"
    },
    {
      name: 'Mr.D',
      score: 90,
      grade: "S"
    },
    {
      name: 'Mr.E',
      score: 20,
      grade: "U"
    },
    {
      name: 'Mr.A',
      score: 50,
      grade: "C"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
