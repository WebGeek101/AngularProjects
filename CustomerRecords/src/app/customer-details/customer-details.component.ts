import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  data:any;
  customer:any;
  filteredData: any;
  userId: any;
  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    fetch('../../assets/CustomerDetails.json')
    .then(response => response.json())
    .then(data => {
      this.data = data;
      this.filterData();
    });
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      this.filterData();
    });

  }
  filterData() {
    if (this.data && this.userId) {
      this.filteredData = this.data.filter((c: { id: any; }) => c.id === this.userId);
    }
  }
}