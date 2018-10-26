import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/orders/orders.component';

import { AuthService } from './services/auth.service';


import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PasswordComponent } from './components/password/password.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import{AngularFireModule} from 'angularfire2';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import{AngularFireStorageModule} from 'angularfire2/storage';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { ConexionService } from './services/conexion.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MenuComponent,
    OrdersComponent,
    PasswordComponent,
    BreakfastComponent,
    LunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [AuthService, ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
