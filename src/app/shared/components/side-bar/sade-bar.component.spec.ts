import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadeBarComponent } from './sade-bar.component';

describe('SadeBarComponent', () => {
  let component: SadeBarComponent;
  let fixture: ComponentFixture<SadeBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadeBarComponent]
    });
    fixture = TestBed.createComponent(SadeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
