import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  username:string|null = '';
  email:string|null='';
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email')
  }

}
