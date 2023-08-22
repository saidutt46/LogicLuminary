import { Component, Input, OnInit } from '@angular/core';
import { VisualizerTabModel } from '@models';

@Component({
  selector: 'app-visualizer-houser',
  templateUrl: './visualizer-houser.component.html',
  styleUrls: ['./visualizer-houser.component.scss']
})
export class VisualizerHouserComponent implements OnInit {
  private _tabData: VisualizerTabModel = new VisualizerTabModel(); // Initialize with a default value
  _tileData: any; // Adjust the type as per your tile data structure
  _speedData: number = 100; // Default speed value
  startSelected: boolean = false;

  // Getter and Setter for tabData
  @Input() get tabData(): VisualizerTabModel {
    return this._tabData;
  }
  set tabData(newTabData: VisualizerTabModel) {
    this.updateTabData(newTabData);
  }

  // Method to update tabData and trigger changes
  updateTabData(newTabData: VisualizerTabModel) {
    this._tabData = newTabData;
    this.handleTabDataChange();
  }

  // Method to handle changes to tabData
  private handleTabDataChange() {
    // Logic for tabData change
    console.log('tabData has changed:', this._tabData);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  startExection(i: any) {
    // Logic to start execution
    console.log('start execution');
  }
}
