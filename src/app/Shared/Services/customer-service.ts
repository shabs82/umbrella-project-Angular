import { Injectable } from '@angular/core';
import {Customer} from '../Models/Customer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44346/api/Customer';


  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>
    (this.apiUrl);
  }
 /* add filetred customers here*/
  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>
    (this.apiUrl);

  }
  addCustomers(cust: Customer): Observable <Customer> {
    return this.http.post<Customer>(this.apiUrl + '/' + cust.Id, cust );
  }
  getCustomerById(Id: number): Observable <Customer> {
    return this.http.get<Customer>(this.apiUrl + '/' + Id);
  }
  updateCustomers(cust: Customer): Observable <Customer> {
         return this.http.put<Customer>(this.apiUrl + '/' + cust.Id , cust);
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
