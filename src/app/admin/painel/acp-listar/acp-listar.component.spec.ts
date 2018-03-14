import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpListarComponent } from './acp-listar.component';

describe('AcpListarComponent', () => {
  let component: AcpListarComponent;
  let fixture: ComponentFixture<AcpListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
