import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HasilpolingPage } from './hasilpoling.page';

describe('HasilpolingPage', () => {
  let component: HasilpolingPage;
  let fixture: ComponentFixture<HasilpolingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HasilpolingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
