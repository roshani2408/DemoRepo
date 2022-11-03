import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { InputComponent } from './shared/form-elements/input/InputComponent';
import { FieldErrorsComponent } from './shared/form-elements/field-errors/field-errors.component';


import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { PasswordInputComponent } from './shared/form-elements/password-input/password-input.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    InputComponent,
    FieldErrorsComponent,
    PasswordInputComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
		FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor ( library: FaIconLibrary ) {
		library.addIconPacks( far );
	}
 }
