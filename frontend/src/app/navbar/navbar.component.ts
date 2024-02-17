<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
  // user:User;
  role:string|null;
  ngOnInit(): void {
    // console.log('NB');
    console.log(localStorage.getItem("role"));
    this.role=localStorage.getItem("role");
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(["/auth"]);
  }
=======

export class NavBarComponent{

  
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

}
