import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent implements OnInit {
  data:any;
  result:any;

  constructor(private router: Router) {}

  ngOnInit() {
    fetch('../../assets/CustomerDetails.json')
    .then(response => response.json())
    .then(data => {
      this.data = data;
    });
  }

  onViewDetails(id: string) {
    this.router.navigate(['/customerDetails', id]);
  }
}
