import { Customer } from "./Customer";
export class Account {
<<<<<<< HEAD
 accountId?: number;
 customer: Customer;
 balance: number;

  constructor(data: any) {
    // if(this.accountId)
    this.accountId = data?.accountId;
    this.customer = data?.customer;
    this.balance = data?.balance !== undefined ? data.balance : 0;
}
=======
 
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
}