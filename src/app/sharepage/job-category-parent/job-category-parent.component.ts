import { Component } from '@angular/core';
import { JobListService } from 'src/app/service_shared/job-list.service';

@Component({
  selector: 'app-job-category-parent',
  templateUrl: './job-category-parent.component.html',
  styleUrls: ['./job-category-parent.component.scss']
})
export class JobCategoryParentComponent {
  constructor(
    private service:JobListService,
    ){}
    jobData:any;
    ngOnInit(): void{
      this.jobData = this.service.jobdetail
    }
}
