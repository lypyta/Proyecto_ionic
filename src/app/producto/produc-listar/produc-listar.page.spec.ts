import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducListarPage } from './produc-listar.page';

describe('ProducListarPage', () => {
  let component: ProducListarPage;
  let fixture: ComponentFixture<ProducListarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProducListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
