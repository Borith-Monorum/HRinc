import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDividerHarness} from '@angular/material/divider/testing';
import { ChangeDetectorRef } from '@angular/core';
interface Country {
  value: string;
  viewValue: string;

}
@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.scss']
})
export class JobSeekerComponent {
  selectedOption: string= 'email';
  constructor(private cdr: ChangeDetectorRef) {}
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


}
