import { Component, ViewChild,ElementRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDividerHarness} from '@angular/material/divider/testing';
import { ChangeDetectorRef } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-job-seeker-register',
  templateUrl: './job-seeker-register.component.html',
  styleUrls: ['./job-seeker-register.component.scss']
})
export class JobSeekerRegisterComponent {
  selectedOption: string= 'email';

  constructor(
    private cdr: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
) {}

  onHideEmail:boolean = true;
  onEmail(){
    this.onHideEmail = false;
  }

  onHidePhone:boolean = false;
  onPhone(){
this.onHidePhone = true;
  }
  // country
    countries: Country[] = [
    {value: 'Cambodia-0', viewValue: 'Cambodia'},
    {value: 'Brunei-1', viewValue: 'Brunei'},
    {value: 'Indonesia-2', viewValue: 'Indonesia'},
    {value: 'Laos-3', viewValue: 'Laos'},
    {value: 'Malaysia-4', viewValue: 'Malaysia'},
    {value: 'Myanmar-5', viewValue: 'Myanmar'},
    {value: 'Philippine-6', viewValue: 'Philippine'},
    {value: 'Singapore-7', viewValue: 'Singapore'},
    {value: 'Thailand-8', viewValue: 'Thailand'},
    {value: 'Vietnam-9', viewValue: 'Vietnam'},
  ];

  phonePrefix = '+';
  phoneNumber = '';

  onCountryChange(event: any) {
    const countryCode = event.value.split('-')[0];
    switch (countryCode) {
      case 'Cambodia':
        this.phonePrefix = '+855';
        break;
      case 'Brunei':
        this.phonePrefix = '+673';
        break;
      case 'Indonesia':
        this.phonePrefix = '+62';
        break;
      case 'Laos':
        this.phonePrefix = '+856 ';
        break;
      case 'Malaysia':
        this.phonePrefix = '+60';
        break;
      case 'Myanmar':
        this.phonePrefix = '+95';
        break;
      case 'Philippine':
        this.phonePrefix = '+63';
        break;
      case 'Singapore':
        this.phonePrefix = '+65';
        break;
      case 'Thailand':
        this.phonePrefix = '+66';
        break;
      case 'Vietnam':
        this.phonePrefix = '+84';
        break;
      default:
        this.phonePrefix = '+';
        break;
    }

    this.phoneNumber = '';
  }


  // country

// email
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // email

  // password
  hide = true;
  // password



  // steper

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = true;




  user



}
