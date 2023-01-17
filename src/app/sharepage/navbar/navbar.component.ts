import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog){}

  openDialog(){
  this.dialog.open(DialogExampleComponent);
  }


  }

