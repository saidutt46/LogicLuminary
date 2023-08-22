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
  tileMax = 100;
  tileMin = 10;
  speedMax = 100;
  speedMin = 10;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  tileValue = 50;
  speedValue = 50;
  value = 50;
  sliderForm: FormGroup = this.fb.group({
    tileSlider: [50],
    speedSlider: [50, [Validators.min(10), Validators.max(100)]],
  });
  @Output() tilesUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() speedUpdated: EventEmitter<number> = new EventEmitter<number>();

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

}
