import LinkedListAnimationProducer from './LinkedListAnimationProducer';
import { appendCodeSnippet } from '../util/codeSnippets';
import GraphicalLinkedListNode from '../data-structure/GraphicalLinkedListNode';

// Class that produces SVG.Runners animating linked list operations specific to appending
export default class LinkedListAppendAnimationProducer extends LinkedListAnimationProducer {
  public renderAppendCode() {
    this.renderCode(appendCodeSnippet);
  }

  public addNodeAtEnd(newNode: GraphicalLinkedListNode, length: number) {
    // insert index equals the total length
    // e.g. if there are 5 nodes, then insert at index 5
    this.createNodeAt(length, newNode, length);
  }
}
