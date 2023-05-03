
import {MatDialog} from '@angular/material/dialog';

import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, ViewChild, ElementRef, OnInit, HostListener} from '@angular/core';
@Component({
  selector: 'app-navbar-employer',
  templateUrl: './navbar-employer.component.html',
  styleUrls: ['./navbar-employer.component.scss']
})
export class NavbarEmployerComponent {

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

    //toggle
  public toggle:boolean = true;
  onToggle(){
    this.toggle = !this.toggle;
  }


    // employer & jobseekers
    public employer:boolean = false;
    public iconEmployer = true;

  onchange(){
  if(this.employer){
    this.employer = false;

  }else{
    this.employer = true;
  }
  this.iconEmployer = !this.iconEmployer;
  }

  // sticky navbar that hides when scrolling up in TypeScript:

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;

  lastScrollPosition = 0;
  shouldShowNavbar = true;
  navbarHeight!: number;
  isOpened: boolean = false;

  ngAfterViewInit() {
    this.navbarHeight = this.navbar.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.isOpened) {
      this.shouldShowNavbar = false;
    } else if (scrollPosition >= this.lastScrollPosition && scrollPosition > this.navbarHeight) {
      // Scrolling up past navbar
      if (this.shouldShowNavbar) {
        this.navbar.nativeElement.style.transform = 'translateY(-100%)';
        this.shouldShowNavbar = false;
      }
    } else {
      // Scrolling down or not far enough
      if (!this.shouldShowNavbar) {
        this.navbar.nativeElement.style.transform = 'translateY(0)';
        this.shouldShowNavbar = true;
      }
    }

    this.lastScrollPosition = scrollPosition;
  }

  toggleMenu() {
    this.isOpened = !this.isOpened;

    if (this.isOpened) {
      this.navbar.nativeElement.style.transform = 'translateY(0)';
    } else {
      this.onWindowScroll();
    }
  }
}
