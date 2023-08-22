import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isShowing: boolean = true;

  togglePanel() {
    this.isShowing = !this.isShowing;
  }
}
