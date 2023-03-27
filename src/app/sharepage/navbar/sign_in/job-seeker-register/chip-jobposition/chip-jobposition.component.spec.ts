import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipJobpositionComponent } from './chip-jobposition.component';

describe('ChipJobpositionComponent', () => {
  let component: ChipJobpositionComponent;
  let fixture: ComponentFixture<ChipJobpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipJobpositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipJobpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
