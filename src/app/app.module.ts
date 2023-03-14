import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { SwiperModule } from 'swiper/angular';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips'; //chips
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; //button
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogExampleComponent } from './sharepage/navbar/dialog-example/dialog-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { JobDetailComponent } from './page/home/more/job-detail/job-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { JobCategoryComponent } from './page/home/more/job-category/job-category.component';
import { PopupComponent } from './sharepage/popup/popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AllJobsComponent } from './page/home/more/all-jobs/all-jobs.component';
import { EmployerComponent } from './sharepage/popup/employer/employer.component';
import { PackageComponent } from './sharepage/popup/employer/package/package.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { Error404Component } from './sharepage/error404/error404.component';
import { JobseekerComponent } from './sharepage/navbar/jobseeker/jobseeker.component';
import { JobSearchComponent } from './sharepage/job-search/job-search.component';
import { FilterPipe } from './sharepage/job-search/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    DialogExampleComponent,
    JobDetailComponent,
    JobCategoryComponent,
    PopupComponent,
    AllJobsComponent,
    EmployerComponent,
    PackageComponent,
    Error404Component,
    JobseekerComponent,
    JobSearchComponent,
    FilterPipe


  ],

  imports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    SwiperModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
    MatDialogModule,
    OverlayModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
