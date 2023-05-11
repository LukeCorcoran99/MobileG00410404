import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClockmonthPage } from './clockmonth.page';

describe('ClockmonthPage', () => {
  let component: ClockmonthPage;
  let fixture: ComponentFixture<ClockmonthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClockmonthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
