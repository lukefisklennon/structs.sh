import GraphicalLinkedList from 'visualiser-src/linked-list-visualiser/data-structure/GraphicalLinkedList';
import GraphicalBST from 'visualiser-src/binary-search-tree-visualiser/data-structure/GraphicalBST';
<<<<<<< HEAD
import GraphicalDataStructure from './GraphicalDataStructure';
import GraphicalAVL from 'visualiser-src/avl-tree-visualiser/data-structure/GraphicalAVL';
=======
import GraphicalSorts from 'visualiser-src/sorting-visualiser/data-structure/GraphicalSorts';
import GraphicalDataStructure from './GraphicalDataStructure';
import { DataStructure } from './typedefs';
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8

class GraphicalDataStructureFactory {
  public static create(topicTitle: string): GraphicalDataStructure {
    switch (topicTitle.toLowerCase()) {
<<<<<<< HEAD
      case 'linked lists':
        return new GraphicalLinkedList();
      case 'binary search trees':
        return new GraphicalBST();
      case 'avl trees':
        return new GraphicalAVL();
=======
      case DataStructure.LINKED_LISTS.toLowerCase():
        return new GraphicalLinkedList();
      case DataStructure.BINARY_SEARCH_TREE.toLowerCase():
        return new GraphicalBST();
      case DataStructure.SORTING.toLowerCase():
        return new GraphicalSorts();
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
      default:
        throw Error('Invalid Topic Title');
    }
  }
}

export default GraphicalDataStructureFactory;
