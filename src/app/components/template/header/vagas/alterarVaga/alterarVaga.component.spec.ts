/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlterarVagaComponent } from './alterarVaga.component';

describe('AlterarVagaComponent', () => {
  let component: AlterarVagaComponent;
  let fixture: ComponentFixture<AlterarVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
