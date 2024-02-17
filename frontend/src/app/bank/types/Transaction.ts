
import { Account } from './Account';

export class Transaction {
<<<<<<< HEAD
  amount: number;
  transactionDate?:Date;
  transactionType:string;
  accounts?:Account;
  constructor(data: any) {
    this.amount = data.amount;
    this.transactionType=data.transactionType;
    this.transactionDate=data.transactionDate;
    this.accounts = data.accounts;
  }
=======
  
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
}