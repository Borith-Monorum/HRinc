
import { Component,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { JobListService } from 'src/app/cagetory_job/job-list.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/sharepage/popup/popup.component';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, ]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
encapsulation: ViewEncapsulation.None
})  
export class HomeComponent {
constructor(
  private service:JobListService,
  public dialog: MatDialog){}

  jobData:any;
  jobData1:any;
  jobData2:any;
  quote:any;


  //api service

showAllData:any=[]

  ngOnInit(): void{
    this.jobData = this.service.jobdetail,
    this.jobData1 = this.service.jobdetail1,
    this.jobData2 = this.service.jobdetail2,
    this.quote = this.service.quote_detail,
    this.homeData();
    //api service
  }



    homeData()
    {
      this.service.homeapi().subscribe((result)=>{
        console.log(result,'result#');
        if(result.length = 20){
          this.showAllData = result;
        }
      })
    }

    public show = this.dialog.open(PopupComponent);

  }
  

  

