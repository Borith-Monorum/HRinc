import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import {Faker, faker} from '@faker-js/faker';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor(private http:HttpClient) { }
  apiurl="https://api.npoint.io/c531b8b75ebbf14467e4";
  homeapi():Observable<any> {
    return this.http.get(`${this.apiurl}`);
  }

  //jobdetail
  jobdetail =[
    {
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
 
  ]

//quote
quote_detail=[
{
  quote_letter: faker.helpers.arrayElement([
    'Your brand is a story unfolding across all customer touch points.',
    'This is a beutiful day, but i can not see',
    'Increasingly, the mass marketing is turning into a mass of niches',
    'You can not sell anything if you can not tell anything']),
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



  //job search
  
}



