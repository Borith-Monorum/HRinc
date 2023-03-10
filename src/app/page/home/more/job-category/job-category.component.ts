import { Component } from '@angular/core';
import { JobListService } from 'src/app/cagetory_job/job-list.service';
import { PopupComponent } from 'src/app/sharepage/popup/popup.component';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent {
  constructor(
    private service:JobListService,

    ){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.homeData();
  }
  showAllData:any=[]
  homeData()
  {
    this.service.homeapi().subscribe((result)=>{
      console.log(result,'result#');
      if(result.length = 10){
        this.showAllData = result;
      }
    })
}


}
