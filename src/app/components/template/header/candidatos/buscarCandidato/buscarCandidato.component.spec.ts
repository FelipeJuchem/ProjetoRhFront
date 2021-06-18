/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuscarCandidatoComponent } from './buscarCandidato.component';

describe('BuscarCandidatoComponent', () => {
  let component: BuscarCandidatoComponent;
  let fixture: ComponentFixture<BuscarCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
