import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      HomeComponent,
      RegisterComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
