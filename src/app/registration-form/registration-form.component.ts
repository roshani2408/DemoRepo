import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { RegistrationRequestModel } from './registration-request.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {

  public registrationFrom?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.generateRegistrationForm();
  }

  public generateRegistrationForm (): void {
		this.registrationFrom =
			new FormGroup( {
				firstName: new FormControl(
					'Roshani',
					{
						validators: [
							Validators.required,
							UniversalValidators.noEmptyString
						]
					}
				),
				lastName: new FormControl(
					'Bhojane',
					{
						validators: [
							Validators.required,
							UniversalValidators.noEmptyString
						]
					}
				),
				email: new FormControl(
					'roshani66@gmail.com',
					{
						validators: [
							Validators.required,
							EmailValidators.normal
						]
					}
				),
				password: new FormControl(
					'12345678',
					{
						validators: [
							Validators.required,
							UniversalValidators.noWhitespace
						]
					}
				),
				
			});
	}

	public submitRegistrationForm (): void {
		if ( this.registrationFrom?.valid ) {
			const registrationRequest: RegistrationRequestModel = {
				...this.registrationFrom?.value
			};

			// Success 🎉
			console.log( { registrationRequest } );
		}
	}

	


}
