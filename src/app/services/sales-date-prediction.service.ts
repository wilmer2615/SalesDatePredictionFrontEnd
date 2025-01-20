import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments.dev';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerResponse } from '../interfaces/CustomerResponse';

@Injectable({
  providedIn: 'root'
})
export class SalesDatePredictionService {

  constructor(private readonly http:HttpClient) { }


  getSalesDatePrediction(CustomerName?: string): Observable<CustomerResponse[]> {
    
    let params = new HttpParams();
    if (CustomerName) {
      params = params.set('CustomerName', CustomerName);
    }
    
    return this.http.get<CustomerResponse[]>(`${environments.url}${environments.controllerCustomers}`, { params });
  }

}
