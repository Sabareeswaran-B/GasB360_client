import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';
import ProductCategory  from 'src/app/model/product-category.model';
import Type from 'src/app/model/type.model';
import FilledProducts from 'src/app/model/filled-product.model';
import Branch from 'src/app/model/branch.model';
import { process, aggregateBy } from "@progress/kendo-data-query";
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-filledproduct',
  templateUrl: './filledproduct.component.html',
  styleUrls: ['./filledproduct.component.css']
})
export class FilledproductComponent implements OnInit {
  filledDataForGrid!: any;
  filledDataUpdate!: FormGroup;
  filledCreateForm!: FormGroup;

 branch_data!:Branch[] ;
 product_data!: ProductCategory[];
 
  displayModalCreate!: boolean;
  displayModalEdit!: boolean;
  displayModalDelete!:boolean;
  deleteMemberId! : string;
  displayDelete!:string;
  dataCount!:number;
  componentLoading: boolean = true;
  gridData!: FilledProducts[];
 gridView!: any[];
  collapedSideBar!: boolean;

  constructor(private service: AdminService, private builder: FormBuilder, private toaster: ToastrService) {
    this.filledDataUpdate = this.builder.group({
      filledProductId: [''], productCategoryId: [''], filledProductQuantity: [''],
      branchId: [''],active:['']
    });
    this.filledCreateForm = this.builder.group({
      productCategoryId: [''], filledProductQuantity: [''],
      branchId: ['']
    });
   }

  ngOnInit(): void {
    this.displayModalCreate = false;
    this.gridView = this.gridData;
    this.LoadingPage();
  }

  
  receiveCollapsed($event: boolean) {
    this.collapedSideBar = $event;
  }

  adminMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: '/admin/dashboard' },
    { label: 'Drained', icon: 'pi pi-book', routerLink: '/admin/unfilledproduct' },
    { label: 'Infused ', icon: 'pi pi-book', routerLink: '/admin/filledproduct' },
    { label: 'Employee', icon: 'pi pi-id-card', routerLink: '/admin/employee' },
    { label: 'Connection', icon: 'pi pi-user', routerLink: '/admin/connection' },
    { label: 'Product', icon: 'pi pi-star', routerLink: '/admin//productcategory' },
    { label: 'Logout', icon: 'k-icon k-i-undo', routerLink: '/login' },
  ];
  employeeMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: '/employee/dashboard' },
    { label: 'Visitor', icon: 'pi pi-user', routerLink: '/employee/visitor' },
    { label: 'Lending', icon: 'pi pi-star', routerLink: '/employee/lending' },
    { label: 'Logout', icon: 'k-icon k-i-undo', routerLink: '/login' },
  ];
  LoadingPage() {
    this.service.GetAllFilledProducts().subscribe({
      next: (data) => {
        this.filledDataForGrid = data['data' as keyof Object];
        this.dataCount = this.filledDataForGrid.length; 
        this.componentLoading = false;  
        // console.log(this.productDataForGrid)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  createNewUserPopup(){
    this.service.GetAllProductCategories().subscribe({
      next: (data) => {
        this.product_data = data['data' as keyof Object] as unknown as ProductCategory[];
        // console.log(this.type_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.service.GetAllBranches().subscribe({
      next: (data) => {
        this.branch_data = data['data' as keyof Object] as unknown as Branch[];
        // console.log(this.type_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.displayModalCreate = true;

  }
  createNewUser(){
    this.displayModalCreate = false;
    let Filled = this.filledCreateForm.value;
    console.log(Filled)
    Filled.branchId = Filled.branchId.branchId;
    Filled.productCategoryId = Filled.productCategoryId.productId;
    this.service.AddNewFilledProduct(Filled).subscribe({
      next: (data) => {
        let message = data['message' as keyof Object] as unknown as string
        this.toaster.success(message);
        this.LoadingPage()
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.filledCreateForm.reset();
  }

increaseQuantity(dataItem: FilledProducts){
  
this.service.AddFilledProductStock(dataItem.filledProductId,"1").subscribe({
  next: (data)=>{
    console.log(data)
    this.LoadingPage()
    this.toaster.success("Added an Element")
  },
  error: (err)=>{}
})
  }

decreaseQuantity(dataItem: FilledProducts){
    this.service.RemoveFilledProductStock(dataItem.filledProductId,"1").subscribe({
      next: (data)=>{
        console.log(data)
        this.LoadingPage()
        this.toaster.error("Removed an Element")
      },
      error: (err)=>{}
    })
  }

  updateGridElementPopup(dataItem : FilledProducts){
    this.service.GetAllProductCategories().subscribe({
      next: (data) => {
        this.product_data = data['data' as keyof Object] as unknown as ProductCategory[];
        // console.log(this.type_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.service.GetAllBranches().subscribe({
      next: (data) => {
        this.branch_data = data['data' as keyof Object] as unknown as Branch[];
        // console.log(this.type_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
    console.log(dataItem)
    this.filledDataUpdate.setValue({
      'filledProductId': dataItem.filledProductId,
      'productCategoryId': dataItem.productCategoryId,
      'filledProductQuantity': dataItem.filledProductQuantity,
      'branchId': dataItem.branch.branchId,
      'active': dataItem.active,
    })
    this.displayModalEdit = true;
  }
  updateGridElement(){
    this.displayModalEdit = false;
    let updateGrid = this.filledDataUpdate.value;
    updateGrid.branchId = updateGrid.branchId.branchId;
    updateGrid.productCategoryId = updateGrid.productCategoryId.productId;
    console.log(updateGrid)
    this.service.UpdateFilledProduct(updateGrid, updateGrid.filledProductId).subscribe({
      next : (data)=>{
        this.LoadingPage()
        this.toaster.success("Updated   Product");
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  deleteGridElementPopup(dataItem : any){
    // console.log(dataItem)
    this.displayDelete = "Are You Sure want to delete, ";
    this.displayDelete += dataItem.productCategory.productName;
    this.displayDelete += "?";
    this.displayModalDelete = true;
    this.deleteMemberId = dataItem.filledProductId;
  }
  deleteGridElement(){
    this.displayModalDelete = false;
    this.service.DeleteFilledProduct(this.deleteMemberId).subscribe({
      next : (data)=>{
        console.log(data)
        this.toaster.error("Successfully Deleted");
        this.LoadingPage()
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  


  onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "full_name",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "job_title",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "budget",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "phone",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "address",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;
  }

}
