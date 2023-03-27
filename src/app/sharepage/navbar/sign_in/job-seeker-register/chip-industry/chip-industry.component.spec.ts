import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipIndustryComponent } from './chip-industry.component';

describe('ChipIndustryComponent', () => {
  let component: ChipIndustryComponent;
  let fixture: ComponentFixture<ChipIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipIndustryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
