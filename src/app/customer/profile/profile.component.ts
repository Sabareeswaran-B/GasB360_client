import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerId!: string

  constructor(private customerService: CustomerService, private toastr:ToastrService) { }

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
      },
      error: (error) => {
        this.toastr.success("image uploaded failed");
      }
    });
  }

}
