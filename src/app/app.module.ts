import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips'; //chips
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
// import { SwiperModule } from 'swiper/angular';
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
import { JobCategoryParentComponent } from './sharepage/job-category-parent/job-category-parent.component';
import { AllNewComponent } from './sharepage/popup/employer/all-new/all-new.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { JobSeekerComponent, logindialog } from './sharepage/navbar/sign_in/job-seeker-signin/job-seeker.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { JobSeekerRegisterComponent } from './sharepage/navbar/sign_in/job-seeker-register/job-seeker-register.component';
import { DialogDataExampleDialog, ForgotPasswordComponent } from './sharepage/navbar/sign_in/forgot-password/forgot-password.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ChipJobfuntionComponent } from './sharepage/navbar/sign_in/job-seeker-register/chip-jobfuntion/chip-jobfuntion.component';
import { ChipJobpositionComponent } from './sharepage/navbar/sign_in/job-seeker-register/chip-jobposition/chip-jobposition.component';
import { ChipIndustryComponent } from './sharepage/navbar/sign_in/job-seeker-register/chip-industry/chip-industry.component';
import {ToastrModule} from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import { RegisterTestComponent } from './sharepage/navbar/sign_in/test/register-test/register-test.component';
import { LoginTestComponent } from './sharepage/navbar/sign_in/test/login-test/login-test.component';
import { UpdatepopupComponent } from './sharepage/navbar/sign_in/test/updatepopup/updatepopup.component';
import { UserlistingComponent } from './sharepage/navbar/sign_in/test/userlisting/userlisting.component';
import { NavbarEmployerComponent } from './sharepage/navbar/sign_in/test/navbar-employer/navbar-employer.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';

import { register } from 'swiper/element/bundle';
register()
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
    FilterPipe,
    JobCategoryParentComponent,
      AllNewComponent,
      JobSeekerComponent,
      JobSeekerRegisterComponent,
      ForgotPasswordComponent,
      DialogDataExampleDialog,
      logindialog,
      ChipJobfuntionComponent,
      ChipJobpositionComponent,
      ChipIndustryComponent,

      RegisterTestComponent,
        LoginTestComponent,
        UpdatepopupComponent,
        UserlistingComponent,
        NavbarEmployerComponent

  ],

  imports: [

    HighlightModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
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
    CommonModule,
    // SwiperModule,
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
    HttpClientModule,
    MatProgressBarModule,
    MatRadioModule,
    MatInputModule,
    MatListModule,
    MatStepperModule,
    CdkStepperModule,
    MatChipsModule,
    MatAutocompleteModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        themePath: 'node_modules/highlight.js/styles/github.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
