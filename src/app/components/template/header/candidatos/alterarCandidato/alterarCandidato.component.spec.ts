/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlterarCandidatoComponent } from './alterarCandidato.component';

describe('AlterarCandidatoComponent', () => {
  let component: AlterarCandidatoComponent;
  let fixture: ComponentFixture<AlterarCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
