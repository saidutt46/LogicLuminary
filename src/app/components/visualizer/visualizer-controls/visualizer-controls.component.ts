import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-visualizer-controls',
  templateUrl: './visualizer-controls.component.html',
  styleUrls: ['./visualizer-controls.component.scss']
})
export class VisualizerControlsComponent implements OnInit {
  isShowing: boolean = false;
  disabled = false;
  tileMax = 75;
  tileMin = 10;
  speedMax = 500;
  speedMin = 100;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  tileValue = 20;
  speedValue = 200;
  sliderForm: FormGroup = this.fb.group({
    tileSlider: [20, Validators.max(75)],
    speedSlider: [200, [Validators.min(100), Validators.max(500)]],
  });
  @Output() tilesUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() speedUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() start: EventEmitter<any> = new EventEmitter<any>();
  @Output() refreshCanvas: EventEmitter<any> = new EventEmitter<any>();
  @Output() stop: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.sliderForm) {
      this.isShowing = true;
      this.sliderForm.controls['tileSlider'].valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {
        this.tilesUpdated.emit(value);
      });
      this.sliderForm.controls['speedSlider'].valueChanges.pipe(debounceTime(300))
      .subscribe((value) => {
        this.speedUpdated.emit(value);
      });
    }
  }

  startExecution() {
    this.start.emit();
  }

  refresh() {
    this.refreshCanvas.emit();
  }

  stopExecution() {
    this.stop.emit();
  }

}
