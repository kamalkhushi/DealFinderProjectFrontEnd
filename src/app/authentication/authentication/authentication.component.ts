import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss','./mq-authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit(): void {
    this.showRegister = false;
  }
  username = '';
  email='';
  password ='';
  confirmPassword='';
  ngDoCheck(){
    localStorage.setItem('email', this.email);
    localStorage.setItem('username', this.username ? this.username : this.email.split('@')[0]);
  }

  hide:boolean = true;
  
  showRegister:boolean = false;
  alertMessage = '';
  alert : boolean = false;
  submit(){
    if(!this.email || !this.password || (!this.username && this.showRegister)){
      this.alert = true;
      this.alertMessage = "Please fill all the input fields"
    }
    else if((this.password !== this.confirmPassword) && this.showRegister){
      this.alert = true;
      this.alertMessage = "Passwords do not match";
      this.password = "";
      this.confirmPassword = "";
    }
    else{
      this.alert = false;
      this.router.navigate(['home']);
    }
  }
}
