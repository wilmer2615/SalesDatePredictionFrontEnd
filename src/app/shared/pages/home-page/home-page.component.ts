import { Component, ViewChild,ChangeDetectionStrategy, inject, OnInit, AfterViewInit} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import { NewOrderFormComponent } from '../../components/new-order-form/new-order-form.component';
import { CustomerResponse } from '../../../interfaces/CustomerResponse';
import { SalesDatePredictionService } from '../../../services/sales-date-prediction.service';
import { OrdersViewComponent } from '../../components/orders-view/orders-view.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit, AfterViewInit{

  readonly dialog = inject(MatDialog);
  readonly salesDatePredictionService = inject(SalesDatePredictionService);
  displayedColumns: string[] = ['customerName', 'lastOrderDate', 'nextPredictedOrder', 'viewOrders','newOrders'];
  listPostdataSource: MatTableDataSource<CustomerResponse> = new MatTableDataSource<CustomerResponse>([]); 
  customers:CustomerResponse[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.getSalesDatePrediction('');
    this.listPostdataSource.sort = this.sort;
  } 

  ngAfterViewInit() {
    this.listPostdataSource.paginator = this.paginator;
    this.listPostdataSource.sort = this.sort;
  }

  getSalesDatePrediction(filterValue: string) {
    this.salesDatePredictionService.getSalesDatePrediction(filterValue).subscribe(resp => {
      if (resp) {
        this.customers = resp;
        this.listPostdataSource.data = this.customers;
      }
    });
  }

  openNewOrderDialog(customer:CustomerResponse) {
    this.dialog.open(NewOrderFormComponent,{
      width: '450px', 
      height: '650px',
      disableClose: true,
      data: customer
    });
  }
  
  openOrdersViewDialog(customer:CustomerResponse){
    this.dialog.open(OrdersViewComponent,{
      width: '900px', 
      height: 'auto',
      disableClose: true,
      data: customer
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.getSalesDatePrediction(filterValue);
  }
}


