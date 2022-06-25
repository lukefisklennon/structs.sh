import { Text, Rect } from '@svgdotjs/svg.js';

export interface CodeLine {
  rectTarget: Rect;
  textTarget: Text;
}

export interface OperationUsage {
  args: string[];
  description: string;
  id?: number;
}

<<<<<<< HEAD
=======
export enum DataStructure {
  LINKED_LISTS = 'Linked Lists',
  BINARY_SEARCH_TREE = 'Binary Search Trees',
  SORTING = 'Sorting Algorithms',
}

>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
export interface Documentation {
  [command: string]: OperationUsage;
}
