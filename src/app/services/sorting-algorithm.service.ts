import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SortingAlgorithm, SORT_ALG_TREE_DATA } from '../models/sorting-algorithm.model';

@Injectable({
  providedIn: 'root'
})
export class SortingAlgorithmService {

  constructor() { }

  public getSortingAlgData(): Observable<SortingAlgorithm> {
    return of(SORT_ALG_TREE_DATA)
  }
}
