import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';
import ProductCategory  from 'src/app/model/product-category.model';
import Type from 'src/app/model/type.model';
import { MenuItem } from 'primeng/api';
import { process } from "@progress/kendo-data-query";


@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {
  productDataForGrid!: any;
  productDataForGridData!: any;
  productDataUpdate!: FormGroup;
  productCreateForm!: FormGroup;
  type_data!:Type[] ;
  displayModalCreate!: boolean;
  displayModalEdit!: boolean;
  displayModalDelete!:boolean;
  deleteMemberId! : string;
  componentLoading: boolean = true;

  displayDelete!:string;
  dataCount!:number;
  collapedSideBar!: boolean;
  constructor(private service: AdminService, private builder: FormBuilder, private toaster: ToastrService) {
    this.productDataUpdate = this.builder.group({
      productId: [''], productName: [''], productWeight: [''],
      productPrice: [''],active:[''],typeId:['']
    });
    this.productCreateForm = this.builder.group({
      productName: [''], productWeight: [''],
      productPrice: [''],typeId:['']
    });
   }

  ngOnInit(): void {
    this.displayModalCreate = false;
    this.LoadingPage();
  }
  
  receiveCollapsed($event: boolean) {
    this.collapedSideBar = $event;
  }

  adminMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: '/admin/dashboard' },
    { label: 'Product', icon: 'pi pi-star', routerLink: '/admin/productcategory' },
    { label: 'Employee', icon: 'pi pi-id-card', routerLink: '/admin/employee' },
    { label: 'Connection', icon: 'pi pi-user', routerLink: '/admin/connection' },
    { label: 'Filled ', icon: 'pi pi-book', routerLink: '/admin/filledproduct' },
    { label: 'Unfilled', icon: 'pi pi-book', routerLink: '/admin/unfilledproduct' },
    { label: 'Logout', icon: 'k-icon k-i-undo', routerLink: '/login'},
  ];
 
  LoadingPage() {
    this.service.GetAllProductCategories().subscribe({
      next: (data) => {
        this.productDataForGrid = data['data' as keyof Object];
        this.productDataForGridData = data['data' as keyof Object];
        this.dataCount = this.productDataForGrid.length; 
        this.componentLoading = false;
        // console.log(this.productDataForGrid)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  createNewUserPopup(){
    this.displayModalCreate = true;
    this.service.GetAllTypes().subscribe({
      next: (data) => {
        this.type_data = data['data' as keyof Object] as unknown as Type[];
        // console.log(this.type_data)
      },
      error: (err) => {
        console.log(err)
      }
    });

  }
  createNewUser(){
    this.displayModalCreate = false;
    let Production = this.productCreateForm.value;
    Production.typeId = Production.typeId.typeId;
    this.service.AddProductCategory(Production).subscribe({
      next: (data) => {
        let message = data['message' as keyof Object] as unknown as string
        this.toaster.success(message);
        this.LoadingPage()
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.productCreateForm.reset();
  }
  updateGridElementPopup(dataItem: ProductCategory){
    this.service.GetAllTypes().subscribe({
      next: (data) => {
        this.type_data = data['data' as keyof Object] as unknown as Type[];
        // console.log(this.type_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.productDataUpdate.setValue({
      'productId': dataItem.productId,
      'productName': dataItem.productName,
      'productWeight': dataItem.productWeight,
      'productPrice': dataItem.productPrice,
       'typeId': dataItem.typeId,
      'active': dataItem.active,
     
    })
    this.displayModalEdit = true;
  }
  updateGridElement(){
    this.displayModalEdit = false;
    let updateGrid = this.productDataUpdate.value;
    updateGrid.typeId = updateGrid.typeId.typeId;
    this.service.UpdateProductCategory(updateGrid,updateGrid.productId).subscribe({
      next : (data)=>{
        this.LoadingPage()
        this.toaster.success("Updated Product");
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  deleteGridElementPopup(dataItem : any){
      this.displayDelete = "Are You Sure want to delete, ";
      this.displayDelete += dataItem.productName;
      this.displayDelete += "?";
      this.displayModalDelete = true;
      this.deleteMemberId = dataItem.productId;
  }
  deleteGridElement(){
    this.displayModalDelete = false;
    this.service.DeleteProductCategory(this.deleteMemberId).subscribe({
      next : (data)=>{
        this.toaster.error("Successfully Deleted");
        this.LoadingPage()
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  public onFilter(inputEvent: Event): void {
    let inputValue = (inputEvent.target as HTMLInputElement).value;
    this.productDataForGrid = process(this.productDataForGridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "productName",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "productWeight",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "productPrice",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "type.typeName",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;
  }
}
