import { Component } from '@angular/core';
import { VisualizerTabModel } from '@models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isShowing: boolean = true;
  tabData!: VisualizerTabModel;

  togglePanel() {
    this.isShowing = !this.isShowing;
  }

  newTabAdded(tabData: VisualizerTabModel) {
    this.tabData = tabData;
  }

}
