/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CriarTecnologiaComponent } from './criarTecnologia.component';

describe('CriarTecnologiaComponent', () => {
  let component: CriarTecnologiaComponent;
  let fixture: ComponentFixture<CriarTecnologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarTecnologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
