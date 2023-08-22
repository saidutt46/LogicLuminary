import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ControlPanelComponent, HomeComponent, NavbarComponent, VisualizerCanvasComponent,
  VisualizerComponent, VisualizerControlsComponent, VisualizerHouserComponent } from '@components';
import { AppRoutingModule, UiUxModule } from '@modules';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisualizerComponent,
    NavbarComponent,
    ControlPanelComponent,
    VisualizerCanvasComponent,
    VisualizerControlsComponent,
    VisualizerHouserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiUxModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
