import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css'],
})
export class StockDataComponent implements OnInit {
  stockData: any;
  flag:boolean=true;

  constructor(private http: HttpClient) {}

  getStockData(form: NgForm) {
    let enteredDate = form.value.dateinput;
    console.log(
      `https://jsonmock.hackerrank.com/api/stocks?date=${enteredDate}`
    );
    this.http
      .get(`https://jsonmock.hackerrank.com/api/stocks?date=${enteredDate}`)
      .subscribe((data: any) => {
        console.log(data);
        if (data.data.length === 0) {
          this.flag=false;
        } else {
          this.flag=true;
          this.stockData = data.data[0];
        }
      });
  }

  ngOnInit(): void {}
}
