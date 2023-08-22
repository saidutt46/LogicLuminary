import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() controlPanelToggle: EventEmitter<any> = new EventEmitter<any>();
  dots = ['#FF605C', '#FFBD44', '#00CA4E'];
  constructor() {}
  
  
  openControlPanel() {
    this.controlPanelToggle.emit();
  }
}