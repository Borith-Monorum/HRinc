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
    tiles: Tile[] = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    ];
}
