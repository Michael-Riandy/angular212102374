import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';


const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "dashboard", component: DashboardComponent},
  { path: "dashboard2", component: Dashboard2Component},
  { path: "dashboard3", component: Dashboard3Component},
  { path: "login", component : LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
