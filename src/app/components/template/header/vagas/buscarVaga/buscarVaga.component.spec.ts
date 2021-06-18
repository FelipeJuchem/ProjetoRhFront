/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuscarVagaComponent } from './buscarVaga.component';

describe('BuscarVagaComponent', () => {
  let component: BuscarVagaComponent;
  let fixture: ComponentFixture<BuscarVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
