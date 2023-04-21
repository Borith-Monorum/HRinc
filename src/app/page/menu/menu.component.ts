import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit  {
test:string = "";

ngOnInit(): void {

}
ngAfterViewInit() {
  // Get the code block element
  const codeBlock = document.getElementById('code-block');

  // Highlight the code block

}
}
