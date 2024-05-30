import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/core/services/database-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employees: DatabaseServiceService) { }

  employeesList : any = [];

  ngOnInit(): void {
    this.employeesList = this.employees.getEmployees();
  }

}
