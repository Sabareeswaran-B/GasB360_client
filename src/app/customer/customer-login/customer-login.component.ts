import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Subject, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';


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
    
    // this.subscriptions.push(subscription);
  }

  passwordShow() {
    this.encryptPassword = !this.encryptPassword;
  }

}
