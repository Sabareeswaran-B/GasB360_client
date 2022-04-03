import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Role from '../model/role.model';
import { Employee } from 'src/app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  GetAllEmployees(){
    return this.http.get("https://localhost:7076/Employee/GetAllEmployees");
  }
  GetAllRoles(){
    return this.http.get("https://localhost:7076/Role/GetAllRoles");
  }
  AddNewEmployee(Employee_data : any){
    return this.http.post("https://localhost:7076/Employee/AddNewEmployee",Employee_data);
  }
  UpdateEmployee(Employee_data : any,EmployeeId : number){
    return this.http.put("https://localhost:7076/Employee/UpdateEmployee/"+ EmployeeId,Employee_data);
  }
  DeleteEmployee(EmployeeId : string){
    return this.http.delete("https://localhost:7076/Employee/DeleteEmployee/"+ EmployeeId)
  }
}

