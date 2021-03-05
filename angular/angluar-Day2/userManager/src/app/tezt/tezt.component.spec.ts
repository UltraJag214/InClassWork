import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeztComponent } from './tezt.component';

describe('TeztComponent', () => {
  let component: TeztComponent;
  let fixture: ComponentFixture<TeztComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeztComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
