import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataKandidatAdminPage } from './data-kandidat-admin.page';

describe('DataKandidatAdminPage', () => {
  let component: DataKandidatAdminPage;
  let fixture: ComponentFixture<DataKandidatAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataKandidatAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
