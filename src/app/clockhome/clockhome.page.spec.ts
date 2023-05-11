import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClockhomePage } from './clockhome.page';

describe('ClockhomePage', () => {
  let component: ClockhomePage;
  let fixture: ComponentFixture<ClockhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClockhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
