import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Subject, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/service/customer.service';
import { LoginResponse } from 'src/app/model/login.response';


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
    private messageService: MessageService,
    private customerService: CustomerService
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
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login(): void {
    // this.isLoading = true;
    console.log(this.loginForm.value);
    this.customerService.login(this.loginForm.value).subscribe({
      next: (data) => {
        var response: LoginResponse = data['data' as keyof Object] as unknown as LoginResponse;
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response.id);
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('role', response.role.toString());
        let message = data['message' as keyof Object] as unknown as string
        this.messageService.add({ severity: 'success', summary: message });
        this.router.navigate(['/customer/dashboard'], { replaceUrl: true });
      },
      error: (error) => {
        console.log(error);
        let message = error.error.message as unknown as string
        this.messageService.add({ severity: 'error', summary: message });
        this.isLoading = false;
      }
    })
    // this.subscriptions.push(subscription);
  }

  passwordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

}
