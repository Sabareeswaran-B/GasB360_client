import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Subject, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/service/customer.service';
import { LoginResponse } from 'src/app/model/login.response';
import { Toast, ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { profile } from 'src/app/ngrx/profile.action';


@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  isLoading: boolean = false;
  show = faEye as IconProp;
  hide = faEyeSlash as IconProp;
  encryptPassword = true;
  remember = false;
  submitButtonText = "Login"
  remembermeText = "Remember me";
  finalise = new Subject<void>();

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
    private messageService: MessageService,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private cookie: CookieService
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  ngOnInit(): void {
    localStorage.clear();
    this.cookie.deleteAll();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login(): void {
    this.isLoading = true;
    console.log(this.loginForm.value);
    var subscription = this.customerService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);
        var data = response.data as LoginResponse;
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('role', data.role);
        this.cookie.set('token', data.token);
        this.cookie.set('id', data.id);
        this.cookie.set('isLoggedin', 'true');
        this.cookie.set('role', data.role);
        this.store.dispatch(profile(response.data))
        let message = response.message;
        this.toastr.success(message);
        // this.messageService.add({ severity: 'success', summary: message });
        this.isLoading = false;
        this.router.navigate(['/customer/dashboard'], { replaceUrl: true });
      },
      error: (error) => {
        console.log(error);
        let message = error.error.message as unknown as string
        this.toastr.error(message);
        // this.messageService.add({ severity: 'error', summary: message });
        this.isLoading = false;
      }
    })
    this.subscriptions.push(subscription);
  }

  passwordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

}
