import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Customer } from '../../types/Customer';
import { BankService } from '../../services/bank.service';
=======
import { CustomerTS } from '../../types/tstypes/Customerts';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
<<<<<<< HEAD
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customerError$: Observable<string>;
  customerSuccess$: Observable<string>;
  isFormSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private banksService: BankService
  ) {}

  ngOnInit(): void {
=======
  styleUrls: ['./customer.component.scss'],
})
export class CustomersComponent implements OnInit {
  isFormSubmitted: boolean | undefined;
  customerSuccess$: any;
  customerError$: any;
onSubmit() {
  this.isFormSubmitted = true;
    this.customerSuccess$ = of('');
    this.customerError$ = of('');
    this.register();
  }
   customerForm!: FormGroup;

   customers: CustomerTS[] = [
    new CustomerTS("John Doe", "john@example.com", "john_doe", "password123", "User", "1"),
    new CustomerTS("John Doe1", "john1@example.com", "john_doe", "password123", "Admin", "2")
   ]
    
  constructor( private formBuilder: FormBuilder) {
  }

  ngOnInit():void {
    // this.loadCustomers();
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
    this.customerForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
<<<<<<< HEAD
      role:["",[Validators.required]]
    });
  }
  hasSpecialCharacters(inputString:string):boolean {
    // Define a regular expression for special characters
    const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
    // Test if the inputString contains any special characters
    return specialCharactersRegex.test(inputString);
  }
  onSubmit() {
    this.isFormSubmitted = true;
    this.customerSuccess$ = of('');
    this.customerError$ = of('');
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (this.customerForm.invalid) {
      return;
    } else {
      
      const data= this.customerForm.value;
      if(data.password.length < 8)
      {
        this.customerError$ = of("Password must be of 8 characters");
        return;
      }
      if(this.hasSpecialCharacters(data.username))
      {
        this.customerError$ = of("User Name must consist of letter and number only!!");
        return;
      }
      console.log(emailRegex.test(data.email));
      if(!emailRegex.test(data.email))
      {
        this.customerError$ = of("Invalid Email Id!!");
        return;

      }
      // const username = name, password = "abcd1234";
      const customer: Customer = 
       new Customer(data);
      
      ;
      this.banksService.addCustomer(customer).subscribe(
        (res: any) => {
          this.customerSuccess$ = of('Customer created successfully');
        },
        (error) => {
          this.customerError$ = of("Unable to create customer");
        }
      );
    }
  }

}
=======
    });
  }
  register():boolean {
   
    const { name, email, username, password } =this.customerForm.value;
    // Frontend validation for registration form
    if (name === "" || email === "" || username === "" || password === "") {
      this.customerError$= of("All fields are mandatory. Please fill in all the details.");
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        this.customerError$=of("Please enter a valid email address.");
        return false;
    }

    // Validate username (no special characters)
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        this.customerError$=of("Username should not contain special characters.");
        return false;
    }

    // Validate password (at least 8 characters, one capital letter, and one numeric)
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        this.customerError$=of("Password should be at least 8 characters and must contain at least one capital letter and one numeric.");
        return false;
    }

    // You can proceed with registration if all validations pass
    this.customerSuccess$=of("Register clicked. Name: " + name + ", Email: " + email + ", Username: " + username + ", Password: " + password);
    return true;
}
  
  
}
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
