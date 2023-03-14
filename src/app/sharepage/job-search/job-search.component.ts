import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InitialNavigation } from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})

export class JobSearchComponent {


// Search Job

  job_function =[
    {name: "Argiculture & Forestry"},
    {name: " Call for Proposal / Bidding "},
    {name: " Clearance "},
    {name: " Operations Compliance "},
    {name: " Vendor Management "},
    {name: " Managerial Positions "},
    {name: " Accounting / Finance "},
    {name: " Administrative / Support "},
    {name: " Architect / Design "},
    {name: " Banking / Financial Service "},
    {name: " Business Development "},
    {name: " Call Center / Customer Care "},
    {name: " Cleaning / Safeguard "},
    {name: " Community and Social Services "},
    {name: " Consulting / Freelancing "},
    {name: " Driving / Delivery "},
    {name: " Education / Training "},
    {name: " Engineering "},
    {name: " Food and beverage "},
    {name: "Healthcar services  "},
]

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
// a 
  filteredJobs: any[] = [];
  filteredJob: any[] = [];

  filter() {
    this.filteredJobs = this.jobs.filter(item => item.name.toLowerCase().includes(this.value1.toLowerCase()));
    this.filteredJob = this.job_function.filter(item => item.name.toLowerCase().includes(this.value.toLowerCase()));
  }


  ngOnInit() {
    this.filteredJobs = [...this.jobs];
    this.filteredJob = [...this.job_function];
  }

 public value='';

 public value1;
  inputIsFocused = false;
  @ViewChild('myInput')myTextInput!:  ElementRef;
  @ViewChild('myInput1')myTextInput1!:  ElementRef;

  focusInput() {
    this.myTextInput.nativeElement.focus();
    this.myTextInput1.nativeElement.focus();
  }




}


