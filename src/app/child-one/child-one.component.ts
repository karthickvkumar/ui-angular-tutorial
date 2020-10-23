import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  @Input('content') informaton : string;
  @Output() sendMessage = new EventEmitter();
  
  inputData : string;


  constructor() { }

  ngOnInit() {
  }

  onSendMessage(){
    this.sendMessage.emit(this.inputData)
  }

  onChangeInput(){
    this.sendMessage.emit(this.inputData)
  }

}
