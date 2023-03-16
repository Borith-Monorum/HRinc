import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategoryParentComponent } from './job-category-parent.component';

describe('JobCategoryParentComponent', () => {
  let component: JobCategoryParentComponent;
  let fixture: ComponentFixture<JobCategoryParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCategoryParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCategoryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
