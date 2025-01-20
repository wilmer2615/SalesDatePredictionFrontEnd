import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderResponse } from '../interfaces/OrderResponse';
import { environments } from '../environments/environments.dev';
import { EmployeeResponse } from '../interfaces/EmployeeResponse';
import { ProductResponse } from '../interfaces/ProductResponse';
import { ShipperResponse } from '../interfaces/ShipperResponse';
import { NewOrderRequest } from '../interfaces/NewOrderRequest';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly http:HttpClient) { }

  getClientOrders(custId: number):Observable<OrderResponse[]>{
      return this.http.get<OrderResponse[]>(`${environments.url}${environments.controllerOrders}/${custId}`)
    }

  getEmployees():Observable<EmployeeResponse[]>{
    return this.http.get<EmployeeResponse[]>(`${environments.url}${environments.controllerEmployees}`)
  }

  getShippers():Observable<ShipperResponse[]>{
    return this.http.get<ShipperResponse[]>(`${environments.url}${environments.controllerShippers}`)
  }

  getProducts():Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>(`${environments.url}${environments.controllerProducts}`)
  }

  createNewOrder(newOrder: NewOrderRequest): Observable<any> {
    return this.http.post(environments.url + environments.controllerOrders, newOrder);
  }
}
