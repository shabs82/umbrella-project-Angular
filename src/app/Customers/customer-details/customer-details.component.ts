import { Component, OnInit } from '@angular/core';
import {Customer} from '../../Shared/Models/Customer';
import {CustomerService} from '../../Shared/Services/customer-service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  private apiurl = ' https//localhost:44346/api/Customer';
  Customers: Customer[];

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
   ) { }
  Customer: Customer;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).
       subscribe(custFromRestApi => {
        this.Customer = custFromRestApi;
     });
    }


}
