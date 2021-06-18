/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuscarTecnologiaComponent } from './buscarTecnologia.component';

describe('BuscarTecnologiaComponent', () => {
  let component: BuscarTecnologiaComponent;
  let fixture: ComponentFixture<BuscarTecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
