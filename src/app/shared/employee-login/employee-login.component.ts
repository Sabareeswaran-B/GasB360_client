import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  isLoading: boolean = false;
  @ViewChild('password') public textbox!: TextBoxComponent;

  public signInForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  userData: any;

  constructor(
    private service: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) { }
  ngOnInit(): void {
    localStorage.clear();
  }


  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }

  public signinHandler() {

    this.isLoading = true;
    if (this.signInForm.valid) {


      this.service.employeeLogin(this.signInForm.value).subscribe({
        next: (result: any) => {
          if (result != null) {
            this.userData = result;
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user')!);
            this.router.navigate(['']);
            this.userData = result.data;
            console.log(this.userData)
            localStorage.setItem('token', this.userData.token);
            localStorage.setItem('id', this.userData.id);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('role', this.userData.role);

            this.toaster.success("Login Successfull")
            this.router.navigate(['/ordersbyemployee']);

            if (localStorage.getItem('role') == "admin") {
              this.router.navigate(['admin/dashboard'], { replaceUrl: true });
            }
            else {
              this.router.navigate(['delivery/dashboard'], { replaceUrl: true });
            }

            // this.router.navigate(['/delivery/ordersbyemployee']);

          }


        },
        error: (err: any) => {
          this.isLoading = false;
          this.toaster.error("Invalid email or Password, Enter Correctly!!");
        }
      })
      this.signInForm.reset();

    }
    else {
      this.isLoading = false;
      this.toaster.error("Invalid email or Password, Enter Correctly!!");
    }
    // this.signInForm.markAllAsTouched();
    // this._pageloaderservice.requestEnded();

  }

}
