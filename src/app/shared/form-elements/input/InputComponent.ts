import { Component,forwardRef,Input,OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi:true
    }
  ]
})
export class InputComponent implements ControlValueAccessor{

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

   

}
