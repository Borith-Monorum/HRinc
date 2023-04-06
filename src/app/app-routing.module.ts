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
import { JobSeekerComponent } from './sharepage/navbar/sign_in/job-seeker-signin/job-seeker.component';
import { ForgotPasswordComponent } from './sharepage/navbar/sign_in/forgot-password/forgot-password.component';
import { JobSeekerRegisterComponent } from './sharepage/navbar/sign_in/job-seeker-register/job-seeker-register.component';
import { LoginTestComponent} from './sharepage/navbar/sign_in/test/login-test/login-test.component';
import { RegisterTestComponent} from './sharepage/navbar/sign_in/test/register-test/register-test.component';
import { AuthGuard } from './sharepage/navbar/sign_in/test/guard/auth.guard';
import { UserlistingComponent } from './sharepage/navbar/sign_in/test/userlisting/userlisting.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , data: { title: 'Home' } },
  { path: 'about-us', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'contact-us', component: ContactComponent, data: { title: 'Contact Us' } },
  { path: 'asean', component: MenuComponent, data: { title: 'Asean' } },
  { path: 'home/job-detail', component: JobDetailComponent, data: { title: 'Job Detail' } },
  { path: 'home/job-category', component: JobCategoryComponent, data: { title: 'Job Category' } },
  { path: 'all-jobs', component: AllJobsComponent, data: { title: 'All Jobs' } },
  { path: 'employer', component: EmployerComponent, data: { title: 'Employer' } },
  { path: 'jobseekers' , component: JobseekerComponent, data: { title: 'Job Seeker'}},
  { path: 'jobseeker' , component: JobSeekerComponent, data: { title: 'Job Seeker'}},
  { path: 'jobseeker/forgot-password' , component: ForgotPasswordComponent, data: { title: 'Forgot Password'}},
  { path: 'jobseeker/jobseeker-register' , component: JobSeekerRegisterComponent, data: { title: 'jobseeker register'}},
  { path: 'login-test' , component: LoginTestComponent, data: { title: 'Login test'}},
  { path: 'login-test/register-test' , component: RegisterTestComponent, data: { title: 'Register Test'}},
  { path:'user' ,component:UserlistingComponent,canActivate:[AuthGuard], data: { title:'User' }},
  { path: '**', component: Error404Component },
];
const extraOptions: ExtraOptions = {
  useHash:true,
};
@NgModule({
   imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
