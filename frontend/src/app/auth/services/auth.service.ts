import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
<<<<<<< HEAD
import { environment } from "src/environments/environment";
import { map, Observable } from "rxjs";
// import { User } from "../types/user";
import { Customer } from "../../bank/types/Customer"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loginUrl = `${environment.apiUrl}`;


 httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  })
};

  constructor(private http: HttpClient) {}

  login(user: Partial<Customer>): Observable<{ [key: string]: string }> {
    return this.http.post<{ token: string }>(
      `${this.loginUrl}/customer/login`,
      user,
      this.httpOptions
    );
  }

  getToken() {
    return localStorage.getItem("token");
  }
  getRole()
  {
    return localStorage.getItem("role");
  }
  

  createUser(user: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.loginUrl}/customer/register`, user);
=======
import { map, Observable } from "rxjs";
// import { User } from "../types/user";
import { Customer } from "../../bank/types/customer";

export class AuthService {
  

 
  constructor(private http: HttpClient) {}

  login(user: Partial<Customer>): Observable<{ [key: string]: string }> {
    
  }

  getToken() {
    
  }
  getRole()
  {
    
  }
  getUsers(): Observable<Customer[]> {
    
  }

  createUser(user: Customer): Observable<Customer> {
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
  }
}
