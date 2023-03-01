import { NgModule } from '@angular/core';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { JobDetailComponent } from './page/home/more/job-detail/job-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { JobCategoryComponent } from './page/home/more/job-category/job-category.component';
import { AllJobsComponent} from './page/home/more/all-jobs/all-jobs.component';
import { EmployerComponent } from './sharepage/popup/employer/employer.component';
const routes: Routes = [

  {path:'', redirectTo: 'home',pathMatch: 'full' },

  {path: 'home',component:HomeComponent},
  {path: 'about-us',component: AboutComponent},
  {path: 'contact-us',component:MenuComponent},
  {path: 'asean',component:ContactComponent},
  //Home/job-detail
  {path: 'home/job-detail',component:JobDetailComponent},
  {path: 'home/job-category',component:JobCategoryComponent},
  {path: 'home/all-jobs',component:AllJobsComponent},
  {path: 'home/employer',component:EmployerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
