import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagerSettings } from '@progress/kendo-angular-listview';
import { MenuItem } from 'primeng/api';
import ProductCategory from 'src/app/model/product-category.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {


  products: ProductCategory[] = [];

  items!: MenuItem[];
  home: MenuItem = { icon: "pi pi-home", routerLink: "/customer/dashboard"}

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProductCategories();
    this.items = [
      { label: 'Products' },
    ];
  }

  public pagerSettings: PagerSettings = {
    previousNext: false,
    pageSizeValues: false,
    buttonCount: 9,
  };
  public pageSize = 6;

  getAllProductCategories() {
    this.customerService.GetAllProductCategories().subscribe({
      next: (response) => {
        this.products = response.data as ProductCategory[];
        console.log(this.products);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
