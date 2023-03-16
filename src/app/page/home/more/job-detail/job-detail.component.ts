import { Component } from '@angular/core';
import { JobListService } from 'src/app/service_shared/job-list.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})

export class JobDetailComponent {
  constructor(
    private service:JobListService
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
      if(result.length > 0){
        this.showAllData = result;
      }
    })
}
}

