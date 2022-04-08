import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  @ViewChild('password') public textbox!: TextBoxComponent;

  public signInForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  userData: any;

  constructor(
    private service: AuthService,
    private router: Router,
  ) {}
  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }

  public signinHandler() {
    if (this.signInForm.valid) {
      this.service.employeeLogin(this.signInForm.value).subscribe((result:any) => {
        if (result != null) {
          this.userData = result.data;
          console.log(this.userData)
          localStorage.setItem('token',this.userData.token);
          localStorage.setItem('id',this.userData.id);
          localStorage.setItem('isLoggedin','true');
          localStorage.setItem('role',this.userData.role);
          this.router.navigate(['/delivery/ordersbyemployee']);

        } else {

          localStorage.setItem('token','null');
          localStorage.setItem('id','null');
          localStorage.setItem('isLoggedin','null');
          localStorage.setItem('role','null');

        }
      });
      this.signInForm.reset();

    }
    else{
      alert("Invalid email or Password, Enter Correctly!!");
    }

  }

}
