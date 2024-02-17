import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
<<<<<<< HEAD
import { AuthComponent } from "./auth.component";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, UserComponent, LogoutComponent],
=======
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
<<<<<<< HEAD
    LogoutComponent
=======
    
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
  ]
})
export class AuthModule {}
