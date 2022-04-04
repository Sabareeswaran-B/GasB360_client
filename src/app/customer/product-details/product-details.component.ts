import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, ConfirmEventType, MenuItem } from 'primeng/api';
import FilledProduct from 'src/app/model/filled-product.model';
import ProductCategory from 'src/app/model/product-category.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: FilledProduct;
  otherProducts: ProductCategory[] = [];
  items!: MenuItem[];
  home: MenuItem = { icon: "pi pi-home", routerLink: "/customer/dashboard" }
  orderLoading: boolean = false;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Products', routerLink: "/customer/products" },
      { label: 'Product Details' },
    ];
    let productCategoryId = this.router.url.split('/').pop();
    this.getProductDetails(productCategoryId!);
  }

  getProductDetails(productCategoryId: string) {
    this.getProductCategoryById(productCategoryId);
    this.getAllProductCategories();
  }

  getProductCategoryById(productCategoryId: string) {
    this.customerService.GetProductCategoryById(productCategoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.product = response.data as FilledProduct;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  confirmOrder() {
    this.orderLoading = true;
    this.confirmationService.confirm({
      message: `Ordering ${this.product.productCategory.productName}, Do you want to proceed?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastr.success("Order placed successfully");
        this.orderLoading = false;
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

  changeProduct(productCategoryId: string) {
    this.getProductDetails(productCategoryId);
    this.router.navigateByUrl('/customer/products/' + productCategoryId);
  }

  getAllProductCategories() {
    this.customerService.GetAllProductCategories().subscribe({
      next: (response) => {
        this.otherProducts = response.data as ProductCategory[];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
