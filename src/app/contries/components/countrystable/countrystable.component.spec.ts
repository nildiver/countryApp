import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrystableComponent } from './countrystable.component';

describe('CountrystableComponent', () => {
  let component: CountrystableComponent;
  let fixture: ComponentFixture<CountrystableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrystableComponent]
    });
    fixture = TestBed.createComponent(CountrystableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
