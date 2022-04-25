import Customer  from 'src/app/model/customer.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-connectionrequest',
  templateUrl: './connectionrequest.component.html',
  styleUrls: ['./connectionrequest.component.css']
})
export class ConnectionrequestComponent implements OnInit {
  CustomerRequest!: any;
  dataCount!:number;
  componentLoading:boolean = true;
  collapedSideBar!: boolean;
  isLoadingAccept : string ="";
  isLoadingDeclined : string ="";

  constructor(private service: AdminService, private toaster: ToastrService) { }

  ngOnInit(): void {
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
    this.service.GetAllConnectionRequests().subscribe({
      next: (data) => {
        this.CustomerRequest = data.data  as Customer[];
        console.log(this.CustomerRequest)
        this.dataCount = this.CustomerRequest.length; 
        this.componentLoading = false;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  AcceptRequest( customerId : string){
    this.isLoadingAccept = customerId;
    // console.log(customerId)
    this.service.AcceptCustomerConnection(customerId).subscribe({
      next: (data)=>{
        this.toaster.success("Accepted Customer Request")
        this.LoadingPage()
      },
      error: (err)=>{}
    })
  }
  RejectRequest(customerId : string){
    this.isLoadingDeclined=customerId;
    // console.log(customerId)
    this.service.RejectCustomerConnection(customerId).subscribe({
      next: (data)=>{
        this.toaster.success("Rejected Customer Request")
        this.LoadingPage()
      },
      error: (err)=>{}
    })
  }
}
