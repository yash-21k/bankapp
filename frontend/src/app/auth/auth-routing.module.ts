import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
// import { UserListComponent } from "./components/user-list/user-list.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  // { path: "users", component: },
  { path: "add-user", component: UserComponent },
];
=======

const routes: Routes = [];
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
<<<<<<< HEAD


=======
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
