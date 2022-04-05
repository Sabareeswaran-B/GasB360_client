import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Role from '../model/role.model';
import { Employee } from 'src/app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  // Employee 
  GetAllEmployees(){
    return this.http.get("https://localhost:7076/Employee/GetAllEmployees");
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


  // Product Category 
  GetAllProductCategories(){
    return this.http.get("https://localhost:7076/ProductCategory/GetAllProductCategories")
  }
  AddProductCategory(NewProduct : any){
    return this.http.post("https://localhost:7076/ProductCategory/AddProductCategory",NewProduct);
  }
  UpdateProductCategory(Product : any,ProductId : number){
    return this.http.put("https://localhost:7076/ProductCategory/UpdateProductCategory/"+ ProductId,Product);
  }
  DeleteProductCategory(Product : string){
    return this.http.delete("  https://localhost:7076/ProductCategory/DeleteProductCategory/"+ Product)
  }

 // Filled Product Category
 GetAllFilledProducts(){
  return this.http.get("https://localhost:7076/FilledProduct/GetAllFilledProducts")
}
AddNewFilledProduct(Filled : any){
  return this.http.post("https://localhost:7076/FilledProduct/AddNewFilledProduct",Filled);
}
AddFilledProductStock(filledIncrease : string,filledId : string){
  return this.http.put(`https://localhost:7076/FilledProduct/AddFilledProductStock/${filledIncrease}/${filledId}`,{});
}
RemoveFilledProductStock(filledDecrease : string,filledId : string){
  return this.http.put(`https://localhost:7076/FilledProduct/RemoveFilledProductStock/${filledDecrease}/${filledId}`,{});
}
UpdateFilledProduct(filledProduct : any,filledId : number){
  return this.http.put("https://localhost:7076/FilledProduct/UpdateFilledProduct/"+ filledId,filledProduct);
}
DeleteFilledProduct(filledId : string){
  return this.http.delete("https://localhost:7076/FilledProduct/DeleteFilledProduct/"+filledId);
}

 // Unfilled Product Category
 GetAllUnfilledProducts(){
  return this.http.get("https://localhost:7076/UnfilledProduct/GetAllUnfilledProducts")
}
AddNewUnfilledProduct(Filled : any){
  return this.http.post("https://localhost:7076/UnfilledProduct/AddNewUnfilledProduct",Filled);
}
AddUnfilledProductStock(unfilledIncrease : string,unfilledId : string){
  return this.http.put(`https://localhost:7076/UnfilledProduct/AddUnfilledProductStock/${unfilledIncrease}/${unfilledId}`,{});
}
RemoveUnfilledProductStock(unfilledDecrease : string,unfilledId : string){
  return this.http.put(`https://localhost:7076/UnfilledProduct/RemoveUnfilledProductStock/${unfilledDecrease}/${unfilledId}`,{});
}
UpdateUnfilledProduct(unfilledProduct : any,unfilledId : number){
  return this.http.put("https://localhost:7076/UnfilledProduct/UpdateUnfilledProduct/"+ unfilledId,unfilledProduct);
}
DeleteUnfilledProduct(unfilledId : string){
  return this.http.delete("https://localhost:7076/UnfilledProduct/DeleteUnfilledProduct/"+unfilledId);
}
 
   // Roles
   GetAllRoles(){
    return this.http.get("https://localhost:7076/Role/GetAllRoles");
  }

   // Type
   GetAllTypes(){
    return this.http.get("https://localhost:7076/Type/GetAllTypes");
  }

  // Branch
  GetAllBranches(){
  return this.http.get("https://localhost:7076/Branch/GetAllBranches");  
  }

}

