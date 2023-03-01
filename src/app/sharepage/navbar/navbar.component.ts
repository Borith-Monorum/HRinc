import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {FormControl, Validators} from '@angular/forms';
interface Animal {
  name: string;
  sound: string;
}
interface FLAG {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog){}
  flag:any=['cambodia','lao','Myanmar'];
  openDialog(){
  this.dialog.open(DialogExampleComponent);
  }

//language
langs:boolean = true;
lang = "Asean";
laos:boolean = true;
mys:boolean = true;
la:{} | undefined;
cam(){
this.lang = "Cambodia";
}
lao(){
  this.lang = "Lao"
}
my(){
  this.lang = "Myanmar";
}

// end language

  //toggle
  expended = false;
  toggle(){
    this.expended = !this.expended;
  }

public employer = "employer";

onchange(){
this.employer = "Job Seeker";
}

// isOpen = false;
ShowMessage(){
this.inStock = !this.inStock;
}
  public inStock = true;
  public availableSoon = true;

}
