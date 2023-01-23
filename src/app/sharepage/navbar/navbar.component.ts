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
  flag:any=['cambodia','lao','miyanma'];
  openDialog(){
  this.dialog.open(DialogExampleComponent);
  }
  categoryList:any=['all','hosting','ecommerce','finance','course','product'];
  flags: FLAG[] = [
    {value: 'steak-0', viewValue: 'Camobodia'},
    {value: 'pizza-1', viewValue: 'thai'},
    {value: 'tacos-2', viewValue: 'Loa'},
  ];
  }

