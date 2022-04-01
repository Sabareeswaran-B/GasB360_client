import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Role from 'src/app/model/role.model';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee_data!: any;
  employee_grid!: FormGroup;
  employee_form!: FormGroup;
  role_data!: Role[];
  displayModal!: boolean;

  constructor(private service: AdminService, private builder: FormBuilder) {
    this.employee_grid = this.builder.group({
      employeeId: [''], employeeName: [''], roleId: [''],
      active: [''], employeePhone: [''], employeeEmail: [''], role: ['']
    });
    this.employee_form = this.builder.group({
      employeeName: [''], roleId: [''],
      employeePhone: [''], employeeEmail: [''],password:['']
    });
  }
  // OnInit function
  ngOnInit(): void {
    this.displayModal = false;
    this.on_page_loading();
  }
  on_page_loading() {
    this.service.get_employee_data().subscribe({
      next: (data) => {
        this.employee_data = data['data' as keyof Object];
        console.log(data['data' as keyof Object])
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  // Pop up new user modal
  create_new_user_popup() {
    this.displayModal = true;
    this.service.get_role_data().subscribe({
      next: (data) => {
        this.role_data = data['data' as keyof Object] as unknown as Role[];
        console.log(this.role_data)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  // Create a new User
  create_new_user() {
    this.displayModal = false;
    let _Employee_copy = this.employee_form.value;
    _Employee_copy.roleId = _Employee_copy.roleId.roleId;
    // console.log(_Employee_copy)
    this.service.post_employee_data(_Employee_copy).subscribe({
      next: (data)=>{
        console.log(data)
        this.on_page_loading()
      },
      error: (err)=>{
        console.log(err)
      }
    });

  }
  // Update grid Pop up
  update_grid_element_popup() {

  }
  // Updating grid element
  update_grid_element(data: any) {
    console.log(data)
  }
  // Delete Pop up
  delete_grid_element_popup() {

  }
  // Delete Employee Row element
  delete_grid_element(data: any) {
    console.log(data)
  }

}
