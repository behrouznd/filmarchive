import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule} from './material.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
  
 
 
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [    
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    
    //AuthModule,
 
  ],
  exports:[
 
  ],
  providers: [
    //AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
