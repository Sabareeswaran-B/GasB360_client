import { Employee } from 'src/app/model/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Role from 'src/app/model/role.model';
import { AdminService } from 'src/app/service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeDataForGrid!: any;
  employeeDataUpdate!: FormGroup;
  employeeCreateForm!: FormGroup;
  role_data!: Role[];
  displayModalCreate!: boolean;
  displayModalEdit!: boolean;
  displayModalDelete!:boolean;
  deleteMemberId! : string;
  dataCount!:number;

  constructor(private service: AdminService, private builder: FormBuilder, private toaster: ToastrService) {
    this.employeeDataUpdate = this.builder.group({
      employeeId: [''], employeeName: [''], roleId: [''],
      active: [''], employeePhone: [''], employeeEmail: [''],password:['']
    });
    this.employeeCreateForm = this.builder.group({
      employeeName: [''], roleId: [''],
      employeePhone: [''], employeeEmail: [''], password: ['']
    });
  }
  // OnInit function
  ngOnInit(): void {
    this.displayModalCreate = false;
    this.LoadingPage();
  }
  LoadingPage() {
    this.service.GetAllEmployees().subscribe({
      next: (data) => {
        this.employeeDataForGrid = data['data' as keyof Object];
        this.dataCount = this.employeeDataForGrid.length; 
        // console.log(data['data' as keyof Object])
        // console.log("https://localhost:7076/Employee/UpdateEmployee/", 233)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  // Pop up new user modal
  createNewUserPopup() {
    this.displayModalCreate = true;
    this.service.GetAllRoles().subscribe({
      next: (data) => {
        this.role_data = data['data' as keyof Object] as unknown as Role[];
        // console.log(this.role_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  // Create a new User
  createNewUser() {
    this.displayModalCreate = false;
   
    let _Employee_copy = this.employeeCreateForm.value;
    _Employee_copy.roleId = _Employee_copy.roleId.roleId;
    // console.log(_Employee_copy)
    this.service.AddNewEmployee(_Employee_copy).subscribe({
      next: (data) => {
        // console.log(data)
        let message = data['message' as keyof Object] as unknown as string
        this.toaster.success(message);
        this.LoadingPage()
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.employeeCreateForm.reset();
  }
  // Update grid Pop up
  updateGridElementPopup(dataItem: Employee) {
    this.service.GetAllRoles().subscribe({
      next: (data) => {
        this.role_data = data['data' as keyof Object] as unknown as Role[];
        // console.log(this.role_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
    this.displayModalEdit = true;
    // console.log(dataItem);
    this.employeeDataUpdate.setValue({
      'employeeId': dataItem.employeeId,
      'employeeName': dataItem.employeeName,
      'roleId': dataItem.roleId,
      'active': dataItem.active,
      'employeePhone': dataItem.employeePhone,
      'employeeEmail': dataItem.employeeEmail,
      'password': dataItem.password
    })
  }
  // Updating grid element
  updateGridElement() {
    this.displayModalEdit = false;
    let updateGrid = this.employeeDataUpdate.value;
    updateGrid.roleId = updateGrid.roleId.roleId;
    // console.log(updateGrid)
    this.service.UpdateEmployee(updateGrid,updateGrid.employeeId).subscribe({
      next : (data)=>{
        // console.log(data)
        this.LoadingPage()
      },
      error: (err)=>{
        console.log(err)
      }
    })

  }
  // Delete Pop up
  deleteGridElementPopup(dataItem : any) {
    this.displayModalDelete = true;
    this.deleteMemberId = dataItem.employeeId;
    
  }
  // Delete Employee Row element
  deleteGridElement() {
    this.displayModalDelete = false;
    this.service.DeleteEmployee(this.deleteMemberId).subscribe({
      next : (data)=>{
        console.log(data)
        // let message = data['message' as keyof Object] as unknown as string
        this.toaster.error("Successfully Deleted");
        this.LoadingPage()
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

}
