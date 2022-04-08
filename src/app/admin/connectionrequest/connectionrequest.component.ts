import Customer  from 'src/app/model/customer.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-connectionrequest',
  templateUrl: './connectionrequest.component.html',
  styleUrls: ['./connectionrequest.component.css']
})
export class ConnectionrequestComponent implements OnInit {
  CustomerRequest!: any;
  dataCount!:number;
  componentLoading:boolean = true;

  constructor(private service: AdminService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.LoadingPage();
  }

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
    // console.log(customerId)
    this.service.RejectCustomerConnection(customerId).subscribe({
      next: (data)=>{
        this.toaster.error("ARejected Customer Request")
        this.LoadingPage()
      },
      error: (err)=>{}
    })
  }
}
