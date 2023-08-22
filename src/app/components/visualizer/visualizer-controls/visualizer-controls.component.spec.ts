import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerControlsComponent } from './visualizer-controls.component';

describe('VisualizerControlsComponent', () => {
  let component: VisualizerControlsComponent;
  let fixture: ComponentFixture<VisualizerControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizerControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
