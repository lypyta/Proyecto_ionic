import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducEditarPage } from './produc-editar.page';

describe('ProducEditarPage', () => {
  let component: ProducEditarPage;
  let fixture: ComponentFixture<ProducEditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProducEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
