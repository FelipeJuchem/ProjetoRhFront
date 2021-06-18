/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CriarCandidatoComponent } from './criarCandidato.component';

describe('CriarCandidatoComponent', () => {
  let component: CriarCandidatoComponent;
  let fixture: ComponentFixture<CriarCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
