import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../Shared/Services/customer-service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {}

  Save() {
    const customer = this.customerForm.value;
    this.customerService.addCustomers(customer);
    this.customerForm.reset();
    this.router.navigateByUrl('/customer');
  }

}
