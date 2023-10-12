import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducNuevoPage } from './produc-nuevo.page';

describe('ProducNuevoPage', () => {
  let component: ProducNuevoPage;
  let fixture: ComponentFixture<ProducNuevoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProducNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
