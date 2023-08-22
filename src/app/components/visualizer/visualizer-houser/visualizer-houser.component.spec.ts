import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerHouserComponent } from './visualizer-houser.component';

describe('VisualizerHouserComponent', () => {
  let component: VisualizerHouserComponent;
  let fixture: ComponentFixture<VisualizerHouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizerHouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizerHouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
