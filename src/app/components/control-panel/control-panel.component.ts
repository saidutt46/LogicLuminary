import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatTree, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SortingAlgorithm, VisualizerTabModel } from '@models';
import { GlobalWorkerService, SortingAlgorithmService } from '@services';

/** Flat node with expandable and level information */
export interface MenuFlatNode {
  level: number;
  expandable: boolean;
  name: string;
  id: number;
  // active: boolean;
}

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit, AfterViewInit {
  loading = false;
  sortingAlgorithmTreeData!: SortingAlgorithm;
  menuData: SortingAlgorithm[] = [];
  @ViewChild('tree') tree!: MatTree<MenuFlatNode>;
  @Output() tabData: EventEmitter<VisualizerTabModel> = new EventEmitter<VisualizerTabModel>();
  constructor(private algService: SortingAlgorithmService,
    private gwService: GlobalWorkerService) { }

  ngOnInit(): void {
    this.loading = true;
    this.algService.getSortingAlgData().subscribe(data => {
      this.sortingAlgorithmTreeData = data;
      this.menuData.push(this.sortingAlgorithmTreeData);
      this.setDefaultActiveItem();
      this.dataSource.data = this.menuData;
    });
  }

  ngAfterViewInit(): void {
    this.tree.treeControl.expandAll();
  }

  private _transformer = (node: SortingAlgorithm, level: number) => {
    return {
      level: level,
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      id: node.id
    };
  };

  treeControl = new FlatTreeControl<MenuFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;

  // Function to handle when a menu item is clicked
  onMenuItemClick(item: SortingAlgorithm) {
    // Deactivate all items first
    this.deactivateAllItems(this.menuData);
    
    // Activate the clicked item
    item.active = true;
    const tabConfig = this.gwService.generateNewTabConfig(item.id);
    this.tabData.emit(tabConfig);
  }

  // Function to deactivate all items
  deactivateAllItems(items: SortingAlgorithm[]) {
    items.forEach(item => {
      item.active = false;
      if (item.children) {
        this.deactivateAllItems(item.children);
      }
    });
  }

  private setDefaultActiveItem() {
    if (this.menuData) {
      this.menuData[0].active = true;
    }
  }

  // Function to get the dynamic CSS class
  getActiveClass(node: SortingAlgorithm): string {
    return node && node.active ? 'yellow-bg' : 'nothing'; // Return the dynamic class
  }

}
