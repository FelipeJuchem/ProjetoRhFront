/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CriarVagaComponent } from './criarVaga.component';

describe('CriarVagaComponent', () => {
  let component: CriarVagaComponent;
  let fixture: ComponentFixture<CriarVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
