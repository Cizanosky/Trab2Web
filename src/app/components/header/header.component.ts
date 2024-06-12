import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goHome(): void {
    this.router.navigate(['']);
  }

  public goEmployees(): void {
    this.router.navigate(['employees']);
  }

  public goCreateUser(): void{
    this.router.navigate(['cadastro']);
  }
}
