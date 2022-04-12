import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagerSettings } from '@progress/kendo-angular-listview';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import ProductCategory from 'src/app/model/product-category.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit, OnDestroy {


  products: ProductCategory[] = [];

  componentLoading: boolean = true;
  items!: MenuItem[];
  home: MenuItem = { icon: "pi pi-home", routerLink: "/customer" }
  subscriptions: Subscription[] = [];
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProductCategories();
    this.items = [
      { label: 'Products' },
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  public pagerSettings: PagerSettings = {
    previousNext: false,
    pageSizeValues: false,
    buttonCount: 9,
  };
  public pageSize = 6;

  getAllProductCategories() {
    var subscription = this.customerService.GetAllProductCategories().subscribe({
      next: (response) => {
        console.log(response)
        this.products = response.data as ProductCategory[];
        console.log(this.products);
        this.componentLoading = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.subscriptions.push(subscription);
  }

}
