/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlterarTecnologiaComponent } from './alterarTecnologia.component';

describe('AlterarTecnologiaComponent', () => {
  let component: AlterarTecnologiaComponent;
  let fixture: ComponentFixture<AlterarTecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarTecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
