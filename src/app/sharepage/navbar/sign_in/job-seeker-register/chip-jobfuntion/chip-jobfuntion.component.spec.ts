import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipJobfuntionComponent } from './chip-jobfuntion.component';

describe('ChipJobfuntionComponent', () => {
  let component: ChipJobfuntionComponent;
  let fixture: ComponentFixture<ChipJobfuntionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipJobfuntionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipJobfuntionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
