import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})

export class JobSearchComponent {
  value='';
  value1='';
  inputIsFocused = false;
  @ViewChild('myInput')myTextInput!:  ElementRef;
  @ViewChild('myInput1')myTextInput1!:  ElementRef;

  focusInput() {
    this.myTextInput.nativeElement.focus();
    this.myTextInput1.nativeElement.focus();
  }
  jobs = [
    { name: "Aabenraa", country: "Denmark" },
    { name: "Aachen", country: "Germany" },
    { name: "Aalst, Belgium", country: "Belgium" },
    { name: "Äänekoski", country: "Finland" },
    { name: "Abaetetuba", country: "Germany" },
    { name: "Abbeville", country: "United Kingdom (UK)" },
    { name: "Abra", country: "India" },
    { name: "Adelaide", country: "Australia" },
    { name: "Agartala", country: "India" },
    { name: "Aichi", country: "Japan" },
    { name: "Alabama", country: "United State of America (USA)" },
    { name: "Alberta", country: "Canada" },
    { name: "Alor Setar", country: "Malaysia" },
    { name: "Amaragadhi", country: "Nepal" },
    { name: "Amnat Charoen", country: "Thailand" },
    { name: "Amstetten", country: "Ancona" },
    { name: "Ancona", country: "Italy" },
    { name: "Ancona", country: "Italy" },
    // ... add more items here
  ];
}


