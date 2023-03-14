import { NgModule } from '@angular/core';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { JobDetailComponent } from './page/home/more/job-detail/job-detail.component';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { JobCategoryComponent } from './page/home/more/job-category/job-category.component';
import { AllJobsComponent} from './page/home/more/all-jobs/all-jobs.component';
import { EmployerComponent } from './sharepage/popup/employer/employer.component';
import { JobseekerComponent} from './sharepage/navbar/jobseeker/jobseeker.component';
import { Error404Component } from './sharepage/error404/error404.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about-us', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'contact-us', component: ContactComponent, data: { title: 'Contact Us' } },
  { path: 'asean', component: MenuComponent, data: { title: 'Asean' } },
  { path: 'home/job-detail', component: JobDetailComponent, data: { title: 'Job Detail' } },
  { path: 'home/job-category', component: JobCategoryComponent, data: { title: 'Job Category' } },
  { path: 'all-jobs', component: AllJobsComponent, data: { title: 'All Jobs' } },
  { path: 'employer', component: EmployerComponent, data: { title: 'Employer' } },
  { path: 'jobseekers' , component: JobseekerComponent, data: { title: 'Job Seeker'}},
  { path: '**', component: Error404Component }
];
const extraOptions: ExtraOptions = {
  useHash:true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
