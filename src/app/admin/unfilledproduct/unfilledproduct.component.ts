import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';
import ProductCategory from 'src/app/model/product-category.model';
import Type from 'src/app/model/type.model';
import Branch from 'src/app/model/branch.model';
import { process, aggregateBy } from "@progress/kendo-data-query";
import UnfilledProducts from 'src/app/model/unfilled-product.model';

@Component({
  selector: 'app-unfilledproduct',
  templateUrl: './unfilledproduct.component.html',
  styleUrls: ['./unfilledproduct.component.css']
})
export class UnfilledproductComponent implements OnInit {
  unfilledDataForGrid!: any;
  unfilledDataUpdate!: FormGroup;
  unfilledCreateForm!: FormGroup;

 branch_data!:Branch[] ;
 product_data!: ProductCategory[];
 
  displayModalCreate!: boolean;
  displayModalEdit!: boolean;
  displayModalDelete!:boolean;
  deleteMemberId! : string;
  displayDelete!:string;
  dataCount!:number;

  gridData!: UnfilledProducts[];
  gridView!: any[];
  constructor(private service: AdminService, private builder: FormBuilder, private toaster: ToastrService) {
    this.unfilledDataUpdate = this.builder.group({
      unfilledProductId: [''], productCategoryId: [''], unfilledProductQuantity: [''],
      branchId: [''],active:['']
    });
    this.unfilledCreateForm = this.builder.group({
      productCategoryId: [''], unfilledProductQuantity: [''],
      branchId: ['']
    });
   }

  ngOnInit(): void {
    this.displayModalCreate = false;
    this.gridView = this.gridData;
    this.LoadingPage();
  }

  LoadingPage() {
    this.service.GetAllUnfilledProducts().subscribe({
      next: (data) => {
        this.unfilledDataForGrid = data['data' as keyof Object];
        this.dataCount = this.unfilledDataForGrid.length; 
        console.log(this.unfilledDataForGrid)
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
  excel(){
    this.toaster.success('Excel Converted');
  }
  createNewUser(){
    this.displayModalCreate = false;
    let Filled = this.unfilledCreateForm.value;
    console.log(Filled)
    Filled.branchId = Filled.branchId.branchId;
    Filled.productCategoryId = Filled.productCategoryId.productId;
    this.service.AddNewUnfilledProduct(Filled).subscribe({
      next: (data) => {
        let message = data['message' as keyof Object] as unknown as string
        this.toaster.success(message);
        this.LoadingPage()
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.unfilledCreateForm.reset();
  }
  updateGridElementPopup(dataItem : UnfilledProducts){
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
    // console.log(dataItem)
    this.unfilledDataUpdate.setValue({
      'unfilledProductId': dataItem.unfilledProductId,
      'productCategoryId': dataItem.productcategory.productId,
      'unfilledProductQuantity': dataItem.unfilledProductQuantity,
      'branchId': dataItem.branch.branchId,
      'active': dataItem.active,
    })
    this.displayModalEdit = true;
  }
  updateGridElement(){
    this.displayModalEdit = false;
    let updateGrid = this.unfilledDataUpdate.value;
    updateGrid.branchId = updateGrid.branchId.branchId;
    updateGrid.productCategoryId = updateGrid.productCategoryId.productId;
    console.log(updateGrid)
    this.service.UpdateUnfilledProduct(updateGrid, updateGrid.unfilledProductId).subscribe({
      next : (data)=>{
        this.LoadingPage()
        this.toaster.success("Updated   Product");
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  increaseQuantity(dataItem : UnfilledProducts){
    this.service.AddUnfilledProductStock(dataItem.unfilledProductId,"1").subscribe({
      next: (data)=>{
        console.log(data)
        this.LoadingPage()
        this.toaster.success("Added an Element")
      },
      error: (err)=>{}
    })
  }
  decreaseQuantity(dataItem : UnfilledProducts){
    this.service.RemoveUnfilledProductStock(dataItem.unfilledProductId,"1").subscribe({
      next: (data)=>{
        console.log(data)
        this.LoadingPage()
        this.toaster.error("Removed an Element")
      },
      error: (err)=>{}
    })
  }
  deleteGridElementPopup(dataItem : UnfilledProducts){
    console.log(dataItem)
    this.displayDelete = "Are You Sure want to delete, ";
    this.displayDelete += dataItem.productcategory.productName;
    this.displayDelete += "?";
    this.displayModalDelete = true;
    this.deleteMemberId = dataItem.unfilledProductId;
  }
  deleteGridElement(){
    this.displayModalDelete = false;
    this.service.DeleteUnfilledProduct(this.deleteMemberId).subscribe({
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
}
