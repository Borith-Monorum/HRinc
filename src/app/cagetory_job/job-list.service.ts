import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import {Faker, faker} from '@faker-js/faker'
@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor() { }
  //jobdetail
  jobdetail =[
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
  ]

//quote
quote_detail=[
{
  quote_letter: faker.helpers.arrayElement(['Your brand is a story unfolding across all customer touch points.','This is a beutiful day, but i can not see','Increasingly, the mass marketing is turning into a mass of niches','You can not sell anything if you can not tell anything']),
  quote_name: faker.internet.userName(),
}
]

  // sponser
 jobdetail1 =[
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  ]


  //logo list job
  jobdetail2 =[
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
 {
  logo: faker.image.avatar(),
  company: faker.internet.userName(),
  profile: faker.name.firstName(),
  date: faker.helpers.arrayElement(['mon','tue','wed','thu','fri','sat','sun',]),
  datenum: faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']),
 },
  ]
}



