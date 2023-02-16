import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

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
cambodiashow = "";
cambodia(){
  this.cambodiashow = "cambodia";
}
laoshow= "";
lao(){
  this.laoshow ="Loa" ;
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

  }

