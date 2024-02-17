import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
import { TransactionComponent } from "./components/transaction/transaction.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CustomerComponent } from "./components/customer/customer.component";
import { AccountComponent } from "./components/account/account.component";
import { EditCustomerComponent } from "./components/customeredit/customeredit.component";
import { EditAccountComponent } from "./components/accountedit/accountedit.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "customer", component: CustomerComponent },
  { path: "account", component: AccountComponent },
  { path: "transaction", component: TransactionComponent },
  { path: "customer/edit", component: EditCustomerComponent },
  { path: "account/edit", component: EditAccountComponent },
 
];
=======

const routes: Routes = [];
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class BankRoutingModule {}
=======
export class BankRoutingModule {}
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
