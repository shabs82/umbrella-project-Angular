import { Component, OnInit } from '@angular/core';
import {Customer} from '../../Shared/Models/Customer';
import {CustomerService} from '../../Shared/Services/customer-service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  Customers: Customer[]; //

  constructor(private  customerService: CustomerService) { }

  ngOnInit() {
 this.customerService.getCustomer()
   .subscribe(listOfCustomers => { // .subscribe executes the method from the service, listOfCustomers is the response in other words the data we!ve got from the backend
     this.Customers = listOfCustomers; // listOfCustomers is a local variable therefore you cannot use it outside of the subscribe method this is why the Customer list created so these values can be assigned to that and used anywhere in the ts file
   });

   }

 deleteCustomer(id: number) {
   this.customerService.deleteCustomer(id)
     .subscribe(message => {
     console.log('user deleted' + message);
   });

  }


}



