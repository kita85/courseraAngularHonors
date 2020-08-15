import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  success: boolean = false;
  failure: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sendForm(){
    this.success = true;
  }

}
