
import { Component,OnInit,ViewEncapsulation,ViewChild } from '@angular/core';
import { JobListService } from 'src/app/service_shared/job-list.service';
import { PopupComponent } from 'src/app/sharepage/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatProgressBar} from '@angular/material/progress-bar';
SwiperCore.use([Autoplay, Pagination, Navigation]);
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
v: any;
zoneResult: any;



constructor(
  private service:JobListService,
  private dialog:MatDialog,
  private _formBuilder: FormBuilder
  ){}

  jobData:any;
  jobData1:any;
  // jobData2:any;
  quote:any;


  //api service
  showAllData:(any)=[]
  homeData(){
    this.service.homeapi().subscribe((result)=>{
      // console.log(result,'result#');
      if(result.length > 0 ){
        this.showAllData = result;
      }
    })
  }
  public show = this.dialog.open(PopupComponent);
  //toggle
  expanded = false;
  toggle(){
    this.expanded = !this.expanded;
  }


  ngOnInit(): void{
    this.jobData = this.service.jobdetail,
    this.jobData1 = this.service.jobdetail1,
    // this.jobData2 = this.service.jobdetail2,

    this.homeData();
    //api service

    const savedProgressBar = localStorage.getItem('progressBar');
    if (savedProgressBar) {
      this.progressBar = JSON.parse(savedProgressBar);
    }
this.quotesLetter =
 this.quotes[Math.floor(Math.random() * this.quotes.length)];


  }


quotesLetter!: string ;
quotes: string[] = [
    'Your brand is a story unfolding across all customer touch points. ',
    'This is a beautiful day, but I cannot see',
    'Increasingly, the mass marketing is turning into a mass of niches ',
    'You cannot sell anything if you cannot tell anything'
  ];




  toppings = this._formBuilder.group({
    Facebook: false,
    Job_Portal: false,
    LinkedIn: false,
    Recruitment_Agency: false,
    Telegram: false,
  });
  OnHideSubmit:boolean = false;
  OnSubmit(){
    this.OnHideSubmit = true;

    if (this.toppings.value.Facebook) {
      this.progressBar.value_facebook++;
    }
    if (this.toppings.value.Job_Portal) {
      this.progressBar.value_portal++;
    }
    if (this.toppings.value.LinkedIn) {
      this.progressBar.value_linkedin++;
    }
    if (this.toppings.value.Recruitment_Agency) {
      this.progressBar.value_recruitment++;
    }
    if (this.toppings.value.Telegram) {
      this.progressBar.value_telegram++;
    }

    localStorage.setItem('progressBar', JSON.stringify(this.progressBar));
  }






  progressBar = {
    value_company: 0,
    value_facebook: 0,
    value_portal: 0,
    value_linkedin: 0,
    value_recruitment: 0,
    value_telegram: 0,
  }
}
