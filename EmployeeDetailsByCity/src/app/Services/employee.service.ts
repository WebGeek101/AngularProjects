import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'John Doe', city: 'Bengaluru', email: 'johndoe@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', city: 'Bengaluru', email: 'janesmith@example.com', phone: '555-5678' },
    { id: 3, name: 'Robert Johnson', city: 'Chennai', email: 'robertjohnson@example.com', phone: '555-9012' },
    { id: 4, name: 'Emily Davis', city: 'Mysuru', email: 'emilydavis@example.com', phone: '555-3456' },
    { id: 5, name: 'Michael Lee', city: 'Mysuru', email: 'michaellee@example.com', phone: '555-7890' },
    { id: 6, name: 'Sarah Brown', city: 'Chennai', email: 'sarahbrown@example.com', phone: '555-2345' },
    { id: 7, name: 'David Wilson', city: 'Mumbai', email: 'davidwilson@example.com', phone: '555-6789' },
    { id: 8, name: 'Jessica Taylor', city: 'Chennai', email: 'jessicataylor@example.com', phone: '555-0123' },
    { id: 9, name: 'William Clark', city: 'New Delhi', email: 'williamclark@example.com', phone: '555-4567' },
    { id: 10, name: 'Amanda Rodriguez', city: 'New Delhi', email: 'amandarodriguez@example.com', phone: '555-8901' }
  ];

  getEmployeesByCity(city: string) {
    return this.employees.filter(employee => employee.city.toLowerCase()===city.toLowerCase());
  }
}