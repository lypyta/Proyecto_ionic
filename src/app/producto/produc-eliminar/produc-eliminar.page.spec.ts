import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducEliminarPage } from './produc-eliminar.page';

describe('ProducEliminarPage', () => {
  let component: ProducEliminarPage;
  let fixture: ComponentFixture<ProducEliminarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProducEliminarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
