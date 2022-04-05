import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, ConfirmEventType, MenuItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import Address from 'src/app/model/address.model';
import FilledProduct from 'src/app/model/filled-product.model';
import Order from 'src/app/model/order.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-address-index',
  templateUrl: './address-index.component.html',
  styleUrls: ['./address-index.component.css']
})
export class AddressIndexComponent implements OnInit, OnDestroy {

  customerId!: string;
  addresses: Address[] = [];
  subscriptions: Subscription[] = [];
  displayAddAddress: boolean = false;
  addAddressForm!: FormGroup;
  selectedProduct!: FilledProduct;
  addnewLoading: boolean = false;
  componentLoading: boolean = true;
  selectedAddress!: Address;
  orderLoading: boolean = false;
  items!: MenuItem[];
  home: MenuItem = { icon: "pi pi-home", routerLink: "/customer/dashboard" }

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<{ product: FilledProduct }>,
    private toastr: ToastrService,
    private confirmationService: ConfirmationService,
  ) {
    var selectedProductObservable = store.select('product')
    var subscription = selectedProductObservable.subscribe({
      next: (response) => {
        this.selectedProduct = response;
        if (response.filledProductId == null) {
          this.router.navigateByUrl('/customer/products');
          this.toastr.error("Order cannot be proccessed! try again");
        }
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('id')!;
    this.getAddressByCustomerId();
    this.addAddressForm = this.formBuilder.group({
      'addressStreetName': ['', Validators.required],
      'addressCity': ['', Validators.required],
      'addressState': ['', Validators.required],
      'addressCountry': ['', Validators.required],
      'addressPincode': ['', Validators.required],
      'customerId': ['']
    })
    this.items = [
      { label: 'Products', routerLink: "/customer/products" },
      { label: 'Product Details', routerLink: `/customer/products/${this.selectedProduct.productCategory.productId}` },
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  getAddressByCustomerId() {
    var subscription = this.customerService.GetAddressByCustomerId(this.customerId).subscribe({
      next: (response) => {
        this.addresses = response.data as Address[];
        this.componentLoading = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.subscriptions.push(subscription);
  }

  addNewAddress() {
    this.addnewLoading = true;
    this.addAddressForm.patchValue({
      'customerId': this.customerId
    });
    this.customerService.AddNewAddress(this.addAddressForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.toastr.success(data.message)
        this.addnewLoading = false;
        this.addAddressForm.reset();
        this.displayAddAddress = false;
        this.getAddressByCustomerId();
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message)
        this.addnewLoading = false;
        this.addAddressForm.reset();
      }
    })
  }

  confirmDelete(address: Address) {
    this.confirmationService.confirm({
      message: "Are you sure, you want delete it?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedAddress = new Address();
        var subscription = this.customerService.DeleteAddress(address.addressId).subscribe({
          next: (data) => {
            this.toastr.success(data.message);
            this.getAddressByCustomerId();
          }, error: (error) => {
            this.toastr.error(error.error.message);
          }
        });
        this.subscriptions.push(subscription);
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:

            break;
          case ConfirmEventType.CANCEL:

            break;
        }
      }
    });
  }

  confirmOrder() {
    if (this.selectedAddress == null || this.selectedAddress.addressId == null) {
      this.toastr.error("Select an address to proceed!")
    } else {
      this.orderLoading = true;
      this.confirmationService.confirm({
        message: `Ordering ${this.selectedProduct.productCategory.productName}, Do you want to proceed?`,
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          var order = new Order();
          order.addressId = this.selectedAddress.addressId;
          order.customerId = this.customerId;
          order.filledProductId = this.selectedProduct.filledProductId;
          order.orderTotalprice = this.selectedProduct.productCategory.productPrice;
          var subscription = this.customerService.AddNewOrder(order).subscribe({
            next: (response) => {
              this.toastr.success(response.message);
              this.orderLoading = false;
            },
            error: (error) => {
              this.toastr.error(error.error.message);
              this.orderLoading = false;
            }
          });
          this.subscriptions.push(subscription);
        },
        reject: (type: any) => {
          switch (type) {
            case ConfirmEventType.REJECT:
              this.orderLoading = false;
              break;
            case ConfirmEventType.CANCEL:
              this.orderLoading = false;
              break;
          }
        }
      });
    }
  }

  setAddress(address: Address) {
    if (this.selectedAddress != address) {
      this.selectedAddress = address;
    } else {
      this.selectedAddress = new Address();
    }
  }


}
