import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';

import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  @ViewChild('password') public textbox!: TextBoxComponent;

  // responsedata!: any;

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
      this.service.loginUser(this.signInForm.value).subscribe((result:any) => {
        if (result != null) {
          this.userData = result;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
          this.router.navigate(['']);

          // if(this.userData.roleId == 1)
          // {
          //   this.router.navigate(['admin']);
          // }
          // else
          // {
          //   this.router.navigate(['user']);
          // }

        } else {

          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      });
      this.signInForm.reset();

    }
    else{
      alert("Invalid email or Password, Enter Correctly!!");
    }
    // this.signInForm.markAllAsTouched();
    // this._pageloaderservice.requestEnded();
  }

}
