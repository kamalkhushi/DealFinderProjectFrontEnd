import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss','./mq-authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router : Router, private formBuilder : FormBuilder) {}

  ngOnInit(): void {}

  hide:boolean = true;
  hidePassword:boolean = true;
  showLogin :boolean = true;

  login : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  register : FormGroup = new FormGroup({
    username : new FormControl('',  [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword :  new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  alertMessage :any;
  alert : boolean = false;
 
  onLogin(){
    console.log(this.login.value);
    if(this.login.invalid){
      this.alert = true;
      if(this.login.controls['password'].errors){
        this.alertMessage = "Password must be 6 characters long";
      }
      else{
        this.alertMessage = "Please enter a proper email";
      }
    }
    else{
      this.alert = false;
      localStorage.setItem('email', this.login.value.email);
      localStorage.setItem('username', this.login.value.username ? this.login.value.username : this.login.value.email.split('@')[0]);
      this.router.navigate(['home']);
    }
  }

  OnRegister(){
    if(this.login.invalid){
      this.alert = true;
      if(this.login.controls['password'].errors){
        this.alertMessage = "Password must be 6 characters long";
      }
      // if(this.login.controls['username'].invalid){
      //   this.alertMessage = "This field is required";
      //   console.log(this.login.controls['username'].invalid)
      // }
      if(this.login.controls['email'].errors){
        this.alertMessage = "Please enter a proper email";
      }
    }
    else if(this.login.value.password !== this.login.value.confirmPassword){
      this.alert = true;
      this.alertMessage = "Passwords do not match";
    }
    else{
      this.alert = false;
      localStorage.setItem('email', this.register.value.email);
      localStorage.setItem('username', this.register.value.username);
      this.router.navigate(['home']);
    }
  }
}
