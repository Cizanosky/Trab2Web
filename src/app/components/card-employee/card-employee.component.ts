import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-employee',
  templateUrl: './card-employee.component.html',
  styleUrls: ['./card-employee.component.css']
})
export class CardEmployeeComponent implements OnInit {

  @Input() employee : Object;

  constructor() { }

  ngOnInit(): void {
   
  }

}
