export class SortingAlgorithm {
  name: string;
  id: number;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  bestCase: string;
  worstCase: string;
  averageCase: string;
  stable: boolean;
  inPlace: boolean;
  divideAndConquer: boolean;
  tabName: string;
  active?: boolean;
  children?: SortingAlgorithm[];
  constructor(
    name: string,
    id: number,
    description: string,
    timeComplexity: string,
    spaceComplexity: string,
    bestCase: string,
    worstCase: string,
    averageCase: string,
    stable: boolean,
    inPlace: boolean,
    divideAndConquer: boolean,
    tabName: string,
    active: boolean,
    children?: SortingAlgorithm[]
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.timeComplexity = timeComplexity;
    this.spaceComplexity = spaceComplexity;
    this.bestCase = bestCase;
    this.worstCase = worstCase;
    this.averageCase = averageCase;
    this.stable = stable;
    this.inPlace = inPlace;
    this.divideAndConquer = divideAndConquer;
    this.tabName = tabName;
    this.active = active;
    this.children = children;
  }
}

const bubbleSort = new SortingAlgorithm(
  'Bubble Sort',
  1,
  'A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
  'O(n^2)',
  'O(1)',
  'O(n)',
  'O(n^2)',
  'O(n^2)',
  true,
  true,
  false,
  'bubble-sort',
  false,
);

const selectionSort = new SortingAlgorithm(
  'Selection Sort',
  2,
  'A simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items still to be sorted.',
  'O(n^2)',
  'O(1)',
  'O(n^2)',
  'O(n^2)',
  'O(n^2)',
  false,
  true,
  false,
  'selection-sort',
  false
);

const insertionSort = new SortingAlgorithm(
  'Insertion Sort',
  3,
  'A simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.',
  'O(n^2)',
  'O(1)',
  'O(n)',
  'O(n^2)',
  'O(n^2)',
  true,
  true,
  false,
  'insertion-sort',
  false
);

const mergeSort = new SortingAlgorithm(
  'Merge Sort',
  4,
  'An efficient, stable, and comparison-based sorting algorithm. It works by dividing the unsorted list into n sublists, each containing one element, and then repeatedly merging sublists to produce new sorted sublists.',
  'O(n log n)',
  'O(n)',
  'O(n log n)',
  'O(n log n)',
  'O(n log n)',
  true,
  false,
  true,
  'merge-sort',
  false
);

const quickSort = new SortingAlgorithm(
  'Quick Sort',
  5,
  'A highly efficient and widely used sorting algorithm that uses a divide-and-conquer strategy to sort an array or list. It works by selecting a "pivot" element and partitioning the other elements into two sub-arrays.',
  'O(n log n)',
  'O(log n)',
  'O(n log n)',
  'O(n^2)',
  'O(n log n)',
  false,
  true,
  true,
  'quick-sort',
  false
);

export const SORT_ALG_DATA = [bubbleSort, selectionSort, insertionSort, mergeSort, quickSort];

export const SORT_ALG_TREE_DATA = new SortingAlgorithm(
  'SORTING ALGORTIHMS',
  0,
  'A collection of sorting algorithms',
  '',
  '',
  '',
  '',
  '',
  false,
  false,
  false,
  '',
  false,
  SORT_ALG_DATA
)
