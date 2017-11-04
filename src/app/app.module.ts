import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';
import { NavbarComponent } from './components/navbar/index';
import { SidebarComponent } from './components/sidebar/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
