// import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {callJSFun} from '../app/javascriptfun.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  title = 'project1';
ngOnInit(): void {
  callJSFun()
}
}
