import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataKandidatPage } from './data-kandidat.page';

describe('DataKandidatPage', () => {
  let component: DataKandidatPage;
  let fixture: ComponentFixture<DataKandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataKandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
