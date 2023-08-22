import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VisualizerTabModel } from '@models';
import { GlobalWorkerService } from '@services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  tabData: VisualizerTabModel[] = [];
  selectedTabLocal: number = 0;
  delay: number = 100; // Delay between each step (in milliseconds)

  constructor(private gwService: GlobalWorkerService) {
    // Subscribe to new data and add a new tab when received
    this.gwService.getDefaultTabConfig().subscribe(data => {
      this.tabData = data;
    });
  }

  ngOnInit(): void {
  }

  // Add a new tab to tabData
  addTab(newTabData: VisualizerTabModel) {
    this.tabData.push(newTabData);
    this.selectedTabLocal = this.tabData.length - 1; // Select the newly added tab
  }

  // ... other methods ...

  // Remove a tab from tabData
  closeTab(index: number) {
    this.tabData.splice(index, 1);
  }
}
