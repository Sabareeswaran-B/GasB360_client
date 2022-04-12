import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import Customer from 'src/app/model/customer.model';
import Type from 'src/app/model/type.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit, OnDestroy {


  signupForm!: FormGroup;
  isLoading: boolean = false;
  show = faEye as IconProp;
  hide = faEyeSlash as IconProp;
  encryptPassword = true;
  encryptConfirmPassword = true;

  type: Type[] = [];

  subscriptions: Subscription[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.cookie.deleteAll()
    this.signupForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerPhone: ['', Validators.required],
      customerEmail: ['', Validators.required],
      typeId: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.getAllTypes();
  }

  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  getAllTypes() {
    this.customerService.GetAllTypes().subscribe({
      next: (data) => {
        var response = data['data' as keyof Object] as unknown as Type[];
        this.type = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  verifyAndSignup() {
    if (this.signupForm.controls['password'].value == this.signupForm.controls['cpassword'].value) {
      this.signUp()
    } else {
      this.toastr.error("Confirm password doesn't match");
      this.signupForm.patchValue({
        password: "",
        cpassword: ""
      })
    }
  }

  signUp() {
    this.isLoading = true;
    var customer: Customer = new Customer;
    customer.customerName = this.signupForm.controls['customerName'].value;
    customer.customerPhone = this.signupForm.controls['customerPhone'].value;
    customer.customerEmail = this.signupForm.controls['customerEmail'].value;
    customer.typeId = this.signupForm.controls['typeId'].value.typeId;
    customer.password = this.signupForm.controls['password'].value;
    this.customerService.Signup(customer).subscribe({
      next: (response) => {
        console.log(response.data);
        // let message = data['message' as keyof Object] as unknown as string
        // this.messageService.add({ severity: 'success', summary: message });
        this.toastr.success("Sign up successful");
        this.isLoading = false;
        this.router.navigate(['/customer/login'], { replaceUrl: true });
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message);
        this.isLoading = false;
      }
    })
  }

  passwordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

  confirmPasswordShow() {
    this.encryptConfirmPassword = !this.encryptConfirmPassword;
  }

}
