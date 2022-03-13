import { Component, OnInit } from '@angular/core';

declare const navActivePage: any;
// import * as navActivePage from 'navActivePage';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("OnClick");
    navActivePage();
  }

}
