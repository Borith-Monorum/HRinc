import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  //email validation
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  emailFormControl2 = new FormControl('', [Validators.required, Validators.email]);


  //checkbox
    toppings = this._formBuilder.group({
      Job_Posting: false,
      Advertising_Blocks: false,
      All_Available_Products: false,
    });

    constructor(private _formBuilder: FormBuilder) {}
  }





