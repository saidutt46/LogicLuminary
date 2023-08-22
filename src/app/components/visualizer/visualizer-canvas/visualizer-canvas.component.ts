import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { VisualizerTabModel } from '@models';

@Component({
  selector: 'app-visualizer-canvas',
  templateUrl: './visualizer-canvas.component.html',
  styleUrls: ['./visualizer-canvas.component.scss']
})
export class VisualizerCanvasComponent implements OnInit {
  private _tabData: VisualizerTabModel = new VisualizerTabModel(); // Initialize with a default value
  private _tileData: any; // Adjust the type as per your tile data structure
  private _speedData: number = 100; // Default speed value
  tileBars: number[] = [];
  loading = false;
  welcomeTab!: boolean;
  hasPressedStop = false;

  // Getter and Setter for tabData
  @Input() get tabData(): VisualizerTabModel {
    return this._tabData;
  }
  set tabData(newTabData: VisualizerTabModel) {
    this.updateTabData(newTabData);
  }

  // Method to update tabData and trigger changes
  private updateTabData(newTabData: VisualizerTabModel) {
    this._tabData = newTabData;
    if (newTabData.algId === 0) {
      this.welcomeTab = true;
    }
    this.handleTabDataChange();
  }

  constructor(private elemRef: ElementRef) { }

  ngOnInit(): void {
    this.loading = true;
    this.generateRandomArray();
    if (this._tabData && this._tileData) {
      console.warn('tabData and tileData are not null');
      console.warn(this._tabData);
    }
    this.loading = false;
  }

  generateRandomArray() {
    this.tileBars = Array.from({ length: this._tileData }, () => Math.floor(Math.random() * 100) + 1);
    console.warn('generate array');
    console.warn(this.tileBars);
  }

  updateTileData(data: number) {
    // Logic to update tileData
    this._tileData = data;
    this.handleTileDataChange();
  }

  updateSpeedData(data: number) {
    // Logic to update speedData
    this._speedData = data;
    this.handleSpeedDataChange();
  }

  // Method to handle changes to tabData
  private handleTabDataChange() {
    // Logic for tabData change
  }

  // Method to handle changes to tileData
  private handleTileDataChange() {
    // Logic for tileData change
    this.generateRandomArray();
  }

  // Method to handle changes to speedData
  private handleSpeedDataChange() {
    // Logic for speedData change
  }

  // Function to calculate proportional height based on tile value
  calculateTileHeight(value: number): string {
    const minHeight = 20; // Adjust the minimum height
    const maxHeight = 100; // Adjust the maximum height
    const normalizedValue = value / 100; // Normalize value to range [0, 1]
    const calculatedHeight = minHeight + (normalizedValue * (maxHeight - minHeight));
    return `${calculatedHeight}px`;
  }

  async startExecution(i: any) {
    // Logic to start execution
    console.log('start execution');
    if (this.tabData) {
      console.warn(this.tabData);
      switch (this.tabData.algId) {
        case 1:
          await this.bubbleSort();
          break;
        case 2:
          await this.selectionSort();
          break;
        case 3:
          await this.insertionSort();
          break;
        case 4:
          await this.mergeSort(0, this.tileBars.length - 1);
          break;
        case 5:
          await this.quickSort(0, this.tileBars.length - 1);
          break;
        default:
          break;
      }
    }
  }

  async bubbleSort() {
    let elements = this.elemRef.nativeElement.querySelectorAll('.bar');
    const n = this.tileBars.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if(this.hasPressedStop == true){
          return;
        }
        // Add "current" class to the elements being compared
        elements[j].classList.add('current');
        elements[j + 1].classList.add('current');

        if (this.tileBars[j] > this.tileBars[j + 1]) {
          await this.delayAsync(this._speedData); // Delay before each step
          this.swap(j, j + 1);
        }
        // Remove "current" class from the elements after comparison
        elements[j].classList.remove('current');
        elements[j + 1].classList.remove('current');
      }
    }
  }

  async insertionSort() {
    let elements = this.elemRef.nativeElement.querySelectorAll('.bar');
    const n = this.tileBars.length;
  
    for (let i = 1; i < n; i++) {
      const key = this.tileBars[i];
      let j = i - 1;
  
      // Add "current" class to the element being compared
      elements[i].classList.add('current');
  
      while (j >= 0 && this.tileBars[j] > key) {
        if (this.hasPressedStop) {
          return;
        }
  
        await this.delayAsync(this._speedData); // Delay before each step
        this.tileBars[j + 1] = this.tileBars[j];
  
        // Update CSS classes for the elements being shifted
        elements[j + 1].classList.add('current');
        elements[j].classList.remove('current');
        j--;
      }
  
      this.tileBars[j + 1] = key;
  
      // Remove "current" class from the element after comparison
      elements[i].classList.remove('current');
    }
  }

  async selectionSort() {
    let elements = this.elemRef.nativeElement.querySelectorAll('.bar');
    const n = this.tileBars.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Add "current" class to the current element being compared
      elements[i].classList.add('current');
  
      for (let j = i + 1; j < n; j++) {
        if (this.hasPressedStop) {
          return;
        }
  
        // Add "current" class to the element being compared
        elements[j].classList.add('current');
  
        if (this.tileBars[j] < this.tileBars[minIndex]) {
          // Remove "current" class from previous minIndex element
          elements[minIndex].classList.remove('current');
          minIndex = j;
        } else {
          // Remove "current" class from current element if not the minimum
          elements[j].classList.remove('current');
        }
      }
  
      // Swap elements and update CSS classes
      await this.delayAsync(this._speedData);
      this.swap(i, minIndex);
      elements[minIndex].classList.remove('current');
    }
  }

  async mergeSort(left: number, right: number) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      // Apply mergeSort to the left and right halves
      await this.mergeSort(left, mid);
      await this.mergeSort(mid + 1, right);
  
      // Merge the sorted halves
      await this.merge(left, mid, right);
    }
  }

  async merge(left: number, mid: number, right: number) {
    let elements = this.elemRef.nativeElement.querySelectorAll('.bar');
    const n1 = mid - left + 1;
    const n2 = right - mid;
  
    const leftArray = this.tileBars.slice(left, left + n1);
    const rightArray = this.tileBars.slice(mid + 1, mid + 1 + n2);
  
    let i = 0;
    let j = 0;
    let k = left;
  
    while (i < n1 && j < n2) {
      if (this.hasPressedStop) {
        return;
      }
  
      // Add "current" class to the elements being compared
      elements[left + i].classList.add('current');
      elements[mid + 1 + j].classList.add('current');
  
      if (leftArray[i] <= rightArray[j]) {
        this.tileBars[k] = leftArray[i];
        i++;
      } else {
        this.tileBars[k] = rightArray[j];
        j++;
      }
  
      k++;
      await this.delayAsync(this._speedData);
    }
  
    // Remove "current" class from the elements after comparison
    for (let p = left; p <= right; p++) {
      elements[p].classList.remove('current');
    }
  
    // Copy the remaining elements of leftArray, if any
    while (i < n1) {
      this.tileBars[k] = leftArray[i];
      i++;
      k++;
    }
  
    // Copy the remaining elements of rightArray, if any
    while (j < n2) {
      this.tileBars[k] = rightArray[j];
      j++;
      k++;
    }
  }  

  async quickSort(low: number, high: number) {
    if (low < high) {
      const pivotIndex = await this.partition(low, high);
  
      // Apply quicksort to the left and right partitions
      await this.quickSort(low, pivotIndex - 1);
      await this.quickSort(pivotIndex + 1, high);
    }
  }
  
  async partition(low: number, high: number): Promise<number> {
    let elements = this.elemRef.nativeElement.querySelectorAll('.bar');
    const pivot = this.tileBars[high];
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {
      // Add "current" class to the element being compared
      elements[j].classList.add('current');
  
      if (this.tileBars[j] < pivot) {
        i++;
        if (i !== j) {
          await this.delayAsync(this._speedData); // Delay before each step
          this.swap(i, j);
        }
      }
  
      // Remove "current" class from the element after comparison
      elements[j].classList.remove('current');
    }
  
    if (i + 1 !== high) {
      await this.delayAsync(this._speedData); // Delay before each step
      this.swap(i + 1, high);
    }
  
    return i + 1;
  }

  swap(i: number, j: number) {
    const temp = this.tileBars[i];
    this.tileBars[i] = this.tileBars[j];
    this.tileBars[j] = temp;
  }

  delayAsync(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  stopExecution(i: any) {
    // Logic to stop execution
    console.log('stop execution');
    this.hasPressedStop = true;
  }

  refresh(i: any) {
    // Logic to refresh canvas
    console.log('refresh canvas');
    let elements = this.elemRef.nativeElement.querySelectorAll('.bar');
    elements.forEach((e: any) => e.classList.remove('completed') && e.classList.remove('current'));
    this.hasPressedStop = false;
    this.generateRandomArray();
  }
}
