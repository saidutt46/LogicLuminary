import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { VisualizerTabModel } from '@models';
import { GlobalWorkerService } from '@services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})

export class VisualizerComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup; // Access the MatTabGroup element
  tabData: VisualizerTabModel[] = [];
  incomingTab!: VisualizerTabModel; 
  selectedTabLocal: number = 0;
  delay: number = 100; // Delay between each step (in milliseconds)

  // Getter for tabData
  @Input() get updateTabConfig(): VisualizerTabModel {
    return this.incomingTab;
  }

  // Setter for tabData
  set updateTabConfig(newTabData: VisualizerTabModel) {
    this.incomingTab = newTabData;
    if (newTabData !== undefined && newTabData !== null) {
      this.handleTabDataChange(newTabData);
    }
  }

  constructor(private gwService: GlobalWorkerService) {
    // Subscribe to new data and add a new tab when received
    this.gwService.getDefaultTabConfig().subscribe(data => {
      this.tabData = data;
    });
  }

  // Method to handle changes to tabData
  private handleTabDataChange(newTabData: VisualizerTabModel) {
    // You can invoke your method here every time tabData changes
    console.log('new tab was clicked:', this.incomingTab);
    if (this.alreadyExists(newTabData)) {
      const index = this.tabData.findIndex((tab: VisualizerTabModel) => tab.algId === newTabData.algId);
      this.tabGroup.selectedIndex = index;
      return;
    }
    this.tabData.push(newTabData);
    console.warn(this.tabData);
    const newIndex = this.tabData.length - 1;
    this.tabGroup.selectedIndex = newIndex;
  }

  ngOnInit(): void {
    console.warn(this.tabData);
  }

  // Remove a tab from tabData
  closeTab(index: number) {
    this.tabData.splice(index, 1);
  }

  alreadyExists(newTabData: VisualizerTabModel): boolean {
    let exists = false;
    this.tabData.forEach((tab: VisualizerTabModel) => {
      if (tab.algId === newTabData.algId) {
        exists = true;
      }
    });
    return exists;
  }
}
