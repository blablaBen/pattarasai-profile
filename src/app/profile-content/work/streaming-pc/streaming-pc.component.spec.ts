import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingPcComponent } from './streaming-pc.component';

describe('StreamingPcComponent', () => {
  let component: StreamingPcComponent;
  let fixture: ComponentFixture<StreamingPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
