import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTestComponent } from './register-test.component';

describe('RegisterTestComponent', () => {
  let component: RegisterTestComponent;
  let fixture: ComponentFixture<RegisterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
