import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  // language = 'html';
  // content = '<p>test</p>';
  // constructor() { }
  content=`

  `;
  test1=`.wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    margin: 1em;
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }`;

  code = `.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  margin: 1em;
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

  test:string = "";

}
