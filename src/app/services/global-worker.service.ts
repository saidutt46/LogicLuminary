import { Injectable } from '@angular/core';
import { DefaultTabConfig, SORT_ALG_DATA, VisualizerTabModel } from '@models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalWorkerService {

  constructor() { }

  getDefaultTabConfig(): Observable<VisualizerTabModel[]> {
    return of(DefaultTabConfig);
  }

  generateNewTabConfig(id: number): VisualizerTabModel {
    const model = new VisualizerTabModel();
    const algortithmData = SORT_ALG_DATA.find(x => x.id === id);
    model.name = algortithmData?.tabName;
    model.algName = algortithmData?.name;
    model.id = algortithmData?.id;
    model.active = true;
    model.type = 'sorting-algorithm';
    model.algId = algortithmData?.id; 

    SORT_ALG_DATA.forEach(x => {
      if (x.id === id) {
        x.active = true;
      } else {
        x.active = false;
      }
    });
    // console.warn(model);
    return model;

    // const exists = DefaultTabConfig.some(x => x.algId === id);
    // console.warn(exists);
    // if (!exists) {
    //   DefaultTabConfig.push(model);
    // }
    // console.warn(DefaultTabConfig);
  }
}
