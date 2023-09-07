import { Component } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css'],
})
export class EmployeeDataComponent {
  searchCity: string = '';
  searchedEmployees: any[] = [];
  flag:boolean=true;

  constructor(private employeeService: EmployeeService) {}

  searchEmployees() {
    this.searchedEmployees = this.employeeService.getEmployeesByCity(
      this.searchCity
    );
    this.flag = this.searchedEmployees.length > 0;
    return this.flag;
  }
}
