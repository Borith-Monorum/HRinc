import { Component } from '@angular/core';

export interface Tile{
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent {

}
// 1
