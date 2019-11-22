import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../Shared/Services/customer-service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {
  Id: number;
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.Id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(this.Id)
      .subscribe(custFromRestApi => {
        this.customerForm.patchValue({
          firstName: custFromRestApi.FirstName,
          lastName: custFromRestApi.LastName,
          address: custFromRestApi.Address,
          email: custFromRestApi.Email,
          phoneNumber: custFromRestApi.PhoneNumber,
        });
      });
  }

    Save() {
      const customer = this.customerForm.value;
      this.customerService.updateCustomers(customer);
      this.customerForm.reset();
      this.router.navigateByUrl('/customer/update-customer');
    }
}
