import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
public ImgShow:string = 'https://www.hrincjobs.com/kh.45d67420b01d8d8c.svg';
public ImgCam = 'https://www.hrincjobs.com/kh.45d67420b01d8d8c.svg';
public ImgLa = 'https://www.hrincjobs.com/la.27d2ef9c1e67e9d7.svg';
public ImgMm = 'https://www.hrincjobs.com/mm.adaa2111ae2837d0.svg';
public ImgAsean = 'https://www.hrincjobs.com/assets/images/asean.svg';
public country =  "Cambodia";
cam(){
  this.country = "Cambodia";
  this.ImgShow = this.ImgCam;
}
la(){
  this.country = "Lao";
  this.ImgShow = this.ImgLa;
}
mm(){
  this.country = "Myanmar";
  this.ImgShow = this.ImgMm;
}
asean(){
  this.country = "Asean";
  this.ImgShow = this.ImgAsean;
}
  constructor(public dialog: MatDialog){}
  flag:any=['cambodia','lao','Myanmar'];
  openDialog(){
  this.dialog.open(DialogExampleComponent);
  }
  //toggle
  expended = false;
  toggle(){
    this.expended = !this.expended;
  }
  public employer = "employer";
  onchange(){
  this.employer = "Job Seeker";
  }
  isSticky: boolean = false;

// sticky navbar that hides when scrolling up in TypeScript:
onScroll(): void {
  let currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (currentPosition > 50) {
    this.isSticky = true;
  } else {
    this.isSticky = false;
  }
}

ngOnInit() {
  window.addEventListener('scroll', this.onScroll, { passive: true });
}

ngOnDestroy() {
  window.removeEventListener('scroll', this.onScroll);
}
// sticky navbar that hides when scrolling up in TypeScript:


}

