import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi:true
    }
  ]
})
export class PasswordInputComponent  {

  @Input()
  public parentForm?:FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public label?:string;

  public value?:string;
  onChange= (value:string) => {};
  onTouched= () => {};
  disabled:boolean=false;

  public passwordFieldType: string = 'password';

  get formField():FormControl{
     return this.parentForm?.get(this.fieldName!) as FormControl;
  }
  constructor() { }

  
  writeValue(value:string): void {
    this.value=value;
  }

  changed(event:Event):void{
      const value:string=(<HTMLInputElement>event.target).value;
      this.onChange(value);
  }
  registerOnChange(onChange: any): void {
    this.onChange=onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched=onTouched;
  }
  setDisabledState?(disabled:boolean):void{
    this.disabled=disabled;
  }

  public togglePasswordVisible (): void {
		this.passwordFieldType =
			this.passwordFieldType === 'text'
				? 'password'
				: 'text';
	}

}
