import { Component, OnInit } from '@angular/core';
// import { Employee } from 'src/Employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // prod!: Employee[];
  constructor() { }

  ngOnInit(): void {
  }
  updateme(data : any){

  }
  deleteme(data : any){
    
  }
}
