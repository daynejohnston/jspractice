import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';

import { HomeComponent } from './home/index';
import { EncountersComponent } from './home/encounters/index';
import { CharacterBuilderComponent } from './home/character-builder/index';
import { NavbarComponent } from './navbar/index';
import { SidebarComponent } from './sidebar/index';
import { LoginComponent } from './login/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    EncountersComponent,
    CharacterBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
