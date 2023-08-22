import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizer-canvas',
  templateUrl: './visualizer-canvas.component.html',
  styleUrls: ['./visualizer-canvas.component.scss']
})
export class VisualizerCanvasComponent implements OnInit {
  @Input() tileData!: number;
  @Input() speedData!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
