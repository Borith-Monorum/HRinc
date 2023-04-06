import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss']
})


export class UserlistingComponent {

dataSource:any;

constructor(
  private service : AuthService,
){}
userlist:any;
Loaduser(){
  this.service.GetAll().subscribe(res =>{
    this.userlist = res;
    this.dataSource = new MatTableDataSource(this.userlist);
  });
}
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
