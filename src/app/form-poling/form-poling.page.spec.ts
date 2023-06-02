import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPolingPage } from './form-poling.page';

describe('FormPolingPage', () => {
  let component: FormPolingPage;
  let fixture: ComponentFixture<FormPolingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormPolingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
