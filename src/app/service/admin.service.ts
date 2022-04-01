import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Employee from '../model/employee.model';
import Role from '../model/role.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  get_employee_data(){
    return this.http.get<Employee[]>("https://localhost:7076/Employee/GetAllEmployees");
  }
  get_role_data(){
    return this.http.get<Role[]>("https://localhost:7076/Role/GetAllRoles");
  }
  post_employee_data(Employee_data : any){
    return this.http.post("https://localhost:7076/Employee/AddNewEmployee",Employee_data);
  }
}
