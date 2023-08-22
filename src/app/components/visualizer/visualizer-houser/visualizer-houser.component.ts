import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizer-houser',
  templateUrl: './visualizer-houser.component.html',
  styleUrls: ['./visualizer-houser.component.scss']
})
export class VisualizerHouserComponent implements OnInit {
  @Input() tabData!: number;
  tileData!: number;
  speedData!: number;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.tabData + 'odlasdlas');
  }

  updateSpeed(value: number) {
    console.log(value);
    this.speedData = value;
  }

  updateTile(value: number) {
    console.log(value);
    this.tileData = value;
  }
}
