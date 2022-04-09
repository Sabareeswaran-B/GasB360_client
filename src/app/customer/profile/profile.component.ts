import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import Customer from 'src/app/model/customer.model';
import Type from 'src/app/model/type.model';
=======
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerId!: string
<<<<<<< HEAD
  customer!: Customer;
  componentLoading: boolean = true;
  subscriptions: Subscription[] = [];
  items!: MenuItem[];
  home: MenuItem = { icon: "pi pi-home", routerLink: "/customer" }
  displayEditModal: boolean = false;
  profileEditForm!: FormGroup;
  type: Type[] = [];
  isLoading: boolean = false;

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService,
    private cookie: CookieService,
    private formBuilder: FormBuilder,
    private profile: Store<{ profile: Customer }>,
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Profile', routerLink: "/customer/profile" },
    ];
    this.customerId = localStorage.getItem('id')!;
    // var profileObservable = this.profile.select('profile');
    // var subscription = profileObservable.subscribe({
    //   next: (response) => {
    //     if (response.customerId == null) {
    //     } else {
    //       this.customer = response;
    //       this.componentLoading = false;
    //       this.getAllTypes();
    //     }
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // });
    
    // this.subscriptions.push(subscription);
    this.getCustomerById();
    this.getAllTypes();
    this.profileEditForm = this.formBuilder.group({
      'customerId': [''],
      'customerName': [''],
      'customerEmail': [''],
      'customerPhone': [''],
      'typeId': ['']
    });
  }

  uploadImage = (files: any) => {
    let fileToUpload = <File>files[0];
    let fileName: string = this.customerId //get name from form for example
    let fileExtension: string = fileToUpload.name.split('?')[0].split('.').pop() || '';
    const formData = new FormData();
    formData.append('file', fileToUpload, fileName + '.' + fileExtension);
    console.log(formData);
    var subscription = this.customerService.UpdateCustomerImage(formData, this.customerId).subscribe({
      next: (data) => {
        this.toastr.success("image uploaded successful");
        this.getCustomerById();
=======

  constructor(private customerService: CustomerService, private toastr:ToastrService,  private cookie: CookieService) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('id')!;
  }

  uploadFile = (files: any) => {
    let fileToUpload = <File>files[0];
    let fileName:string = this.customerId //get name from form for example
    let fileExtension:string = fileToUpload.name.split('?')[0].split('.').pop() || '';
    const formData = new FormData();
    formData.append('file', fileToUpload, fileName + '.' + fileExtension);
    console.log(formData);
    this.customerService.UpdateCustomerImage(formData, this.customerId).subscribe({
      next: (data) => {
        this.toastr.success("image uploaded successful");
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
      },
      error: (error) => {
        this.toastr.success("image uploaded failed");
      }
    });
<<<<<<< HEAD
    this.subscriptions.push(subscription);
  }

  updateProfile() {
    let customer = this.customer;
    customer.typeId = this.profileEditForm.controls['typeId'].value.typeId;
    customer.customerName = this.profileEditForm.controls['customerName'].value;
    customer.customerEmail = this.profileEditForm.controls['customerEmail'].value;
    customer.customerPhone = this.profileEditForm.controls['customerPhone'].value;
    this.customerService.UpdateCustomer(this.customerId, customer).subscribe({
      next: (response) => {
        this.toastr.success(response.message);
        this.getCustomerById();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  openEditModal() {
    console.log(this.customer)
    this.displayEditModal = true;
    this.profileEditForm.setValue({
      'customerId': this.customer.customerId,
      'customerName': this.customer.customerName,
      'customerEmail': this.customer.customerEmail,
      'customerPhone': this.customer.customerPhone,
      'typeId': this.customer.type,
    });
  }

  getAllTypes() {
    this.customerService.GetAllTypes().subscribe({
      next: (data) => {
        var response = data['data' as keyof Object] as unknown as Type[];
        this.type = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  getCustomerById() {
    var subscription = this.customerService.GetCustomerById(this.customerId).subscribe({
      next: (response) => {
        this.customer = response.data as Customer;
        this.componentLoading = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.subscriptions.push(subscription);
=======
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

}
