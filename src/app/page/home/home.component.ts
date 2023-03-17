
import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { JobListService } from 'src/app/service_shared/job-list.service';
import { PopupComponent } from 'src/app/sharepage/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import {FormBuilder, FormGroup} from '@angular/forms';
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
    this.quote = this.service.quote_detail,
    this.homeData();
    //api service


  }

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
  }
  
}
