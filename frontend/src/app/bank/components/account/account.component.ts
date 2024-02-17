<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../services/bank.service';
import { Observable, of } from 'rxjs';
import { Account } from '../../types/Account';
import { Customer } from '../../types/Customer';

@Component({
  selector: 'app-account',
=======
// src/app/accounts/accounts.component.ts
import { Component, OnInit } from '@angular/core';
import { AccountTS } from '../../types/tstypes/Accountts';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts',
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
<<<<<<< HEAD
  customers$: Observable<Customer[]>;
  accountForm: FormGroup;
  accounts$: Observable<Account[]>;
  accountError$: Observable<string>;
  accountSuccess$: Observable<string>;
  isFormSubmitted: boolean = false;
  bankService: BankService;
  role:string|null;
  userId:string|null;
  constructor(
    private formBuilder: FormBuilder,
    private banksService: BankService
  ) {
  
    this.customers$ = this.banksService.getCustomers();
    
  }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      customer: ["", [Validators.required]],
      balance: ["", [Validators.required]],
    });
    
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.accountSuccess$ = of('');
    this.accountError$ = of('');
    if (this.accountForm.invalid) {
      return;
    } else {
      const formData= this.accountForm.value;
      console.log(formData);
      const account = new Account(formData);
      this.banksService.addAccount(account).subscribe(
        (res: any) => {
          this.accountSuccess$ = of("Account created successfully");
        },
        (error) => {
          this.accountError$ = of("Unable to create account");
        }
      );
    }
  }

}
=======
  accountForm!: FormGroup;
  account: AccountTS | undefined;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // No need to fetch data from a service since we are using hardcoded data
    this.accountForm = this.fb.group({
      account_id: [null, [Validators.required, this.validateAccountId]],
      customer_id: [null, Validators.required],
      balance: [null, [Validators.required, this.validateNonNegativeAmount]],
    });
    this.account = new AccountTS("1", 1000.00, "1");

  }
  validateAccountId(control: FormControl) {
    const accountId = control.value;
    return accountId === null ? { accountIdRequired: true } : null;
  }

  validateNonNegativeAmount(control: FormControl) {
    const amount = control.value;
    return amount < 0 ? { nonNegativeAmount: true } : null;
  }

  validateCustomerName(control: FormControl) {
    const customerName = control.value;
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacterPattern.test(customerName) ? { containsSpecialCharacters: true } : null;
  }
}
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
