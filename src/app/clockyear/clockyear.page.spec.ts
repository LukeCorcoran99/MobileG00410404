import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClockyearPage } from './clockyear.page';

describe('ClockyearPage', () => {
  let component: ClockyearPage;
  let fixture: ComponentFixture<ClockyearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClockyearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
