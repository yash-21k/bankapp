<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
// import {TestingComponent} from "../app/testing/testing.component";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./auth.interceptors";
 
 
=======
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
<<<<<<< HEAD
 
=======

>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
  {
    path: "bank",
    loadChildren: () => import("./bank/bank.module").then((m) => m.BankModule),
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/auth",
  },
<<<<<<< HEAD
  // {
  //   path:'testing',
  //   component:TestingComponent
  // }
];
 
@NgModule({
  declarations:[AppComponent],
  imports: [RouterModule.forRoot(routes),BrowserModule,HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [RouterModule],
  bootstrap:[AppComponent]
=======
];

@NgModule({
  declarations: [
    AppComponent // Declare AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent] // Bootstrap AppComponent
>>>>>>> 04e8f83626e012aef92cb05cb4b6886420b3410e
})
export class AppRoutingModule {}