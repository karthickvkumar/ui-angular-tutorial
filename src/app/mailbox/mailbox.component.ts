import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit, OnDestroy, OnChanges {

  userList = [];
  constructor() { }

  ngOnInit() {
    console.log('Triggered ngOnInit')
  }

  ngOnDestroy(){
    console.log('Triggered ngOnDestroy')
    this.userList = null;
    confirm("Do you want to leave the page?")
  }

  ngOnChanges(){
    console.log('Triggered ngOnChanges')
  }
}
