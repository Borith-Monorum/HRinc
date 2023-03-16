import { Component } from '@angular/core';
import { HjNewsService } from 'src/app/service_shared/component/hj-news.service';
@Component({
  selector: 'app-all-new',
  templateUrl: './all-new.component.html',
  styleUrls: ['./all-new.component.scss']
})
export class AllNewComponent {
constructor(private service:HjNewsService){}
ShowNewsData:(any)=[10]
ngOnInit(): void {
this.NewsData();
}
NewsData(){
  this.service.NewsApi().subscribe((result)=>{
    if(result.length = 6){
      this.ShowNewsData= result;
    }
  })
}
}
