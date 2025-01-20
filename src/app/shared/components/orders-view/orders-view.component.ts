import { AfterViewInit, Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrderResponse } from '../../../interfaces/OrderResponse';
import { OrderService } from '../../../services/order.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerResponse } from '../../../interfaces/CustomerResponse';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrl: './orders-view.component.scss'
})
export class OrdersViewComponent implements OnInit, AfterViewInit { 
  
  displayedColumns: string[] = ['orderid', 'requireddate', 'shippeddate', 'shipname','shipaddres','shipcity'];
  listPostdataSource: MatTableDataSource<OrderResponse> = new MatTableDataSource<OrderResponse>([]); 
  orders:OrderResponse[] = [];
  readonly orderService = inject(OrderService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(@Inject(MAT_DIALOG_DATA) public customer: CustomerResponse) {
  }

  ngOnInit(): void {
    this.getClientOrders(this.customer.custId);
  }

  ngAfterViewInit() {
    this.listPostdataSource.paginator = this.paginator;
    this.listPostdataSource.sort = this.sort;
  }

  getClientOrders(custId: number){
    this.orderService.getClientOrders(custId).subscribe(resp => {
      if (resp) {
        this.orders = resp;
        this.listPostdataSource.data = this.orders;
      }
    });
  }

}
