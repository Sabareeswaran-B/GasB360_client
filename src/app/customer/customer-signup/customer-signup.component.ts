import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
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

  type:any[] = [];

  subscriptions: Subscription[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.signupForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerPhone: ['', Validators.required],
      customerEmail: ['', Validators.required],
      typeId: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
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
        var response = data['data' as keyof Object];
        this.type = response as unknown as any[];
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  signUp() {

  }

  passwordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

  confirmPasswordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

}
