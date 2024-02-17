import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../types/Transaction";
import { Observable } from "rxjs";
import { Customer } from "../types/Customer";
import { Account } from "../types/Account";
// import { transition } from "@angular/animations";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
<<<<<<< HEAD
    return this.http.post<Customer>(`${this.baseUrl}/customers`, customer);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `${this.baseUrl}/customers`
    );
=======
  }

  getCustomers(): Observable<Customer[]> {
    
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

  }

  addAccount(account: Account): Observable<Account> {
<<<<<<< HEAD
    return this.http.post<Account>(`${this.baseUrl}/accounts`, account);
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(
      `${this.baseUrl}/accounts`
    );
=======
   
  }

  getAccounts(): Observable<Account[]> {
    
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

  }

  performTransaction(transaction: Transaction): Observable<Transaction> {
<<<<<<< HEAD
    return this.http.post<Transaction>(
      `${this.baseUrl}/transactions`,
      transaction
    );
  }

  getOutstandingBalance(userId: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseUrl}/out-standing?userId=${userId}`
    );

  }

  getAllTranactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.baseUrl}/transactions`
    );
=======
   
  }

  getOutstandingBalance(userId: string): Observable<number> {
    
  }

  getAllTranactions(): Observable<Transaction[]> {
    
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

  }
  /** get account by user */
  getAccountsByUser(userId:string|null): Observable<Account[]> {
<<<<<<< HEAD
    return this.http.get<Account[]>(
      `${this.baseUrl}/accounts/user/${userId}`
    );
=======
    
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

  }

  getTransactionByUser(userId: string|null): Observable<Transaction[]> {
<<<<<<< HEAD
    return this.http.get<Transaction[]>(
      `${this.baseUrl}/transactions/customer/${userId}`
    );
=======
    
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

  }

  deleteCustomer(customerId: number): Observable<any> {
<<<<<<< HEAD
    return this.http.delete(`${this.baseUrl}/customers/${customerId}`);
  }

  editCustomer(customer: Customer): Observable<Customer> {
    console.log(customer);
    const url = `${this.baseUrl}/customers/${customer.customerId}`;
    return this.http.put<Customer>(url, customer);
  }

  deleteAccount(accountId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/accounts/${accountId}`);
  }

  editAccount(account: Account): Observable<Account> {
    console.log(account);
    const url = `${this.baseUrl}/accounts/${account.customer?.customerId}`;
    return this.http.put<Account>(url, account);
=======
    
  }

  editCustomer(customer: Customer): Observable<Customer> {
   
  }

  deleteAccount(accountId: number): Observable<any> {
    
  }

  editAccount(account: Account): Observable<Account> {
    // return null;
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
  }


}
