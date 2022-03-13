import { Component, OnInit } from '@angular/core';

declare function navActivePage():any;

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    navActivePage();
  }

}
