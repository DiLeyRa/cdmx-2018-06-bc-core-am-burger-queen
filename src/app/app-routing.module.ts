import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MenuComponent} from './components/menu/menu.component';
import {OrdersComponent} from './components/orders/orders.component';
import {PasswordComponent} from './components/password/password.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'orders', component:OrdersComponent},
  {path: 'password', component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
