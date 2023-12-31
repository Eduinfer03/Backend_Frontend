import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpleadoComponent } from '../listar-empleado/listar-empleado.component';

describe('ListarComponent', () => {
  let component: ListarEmpleadoComponent;
  let fixture: ComponentFixture<ListarEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEmpleadoComponent]
    });
    fixture = TestBed.createComponent(ListarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
