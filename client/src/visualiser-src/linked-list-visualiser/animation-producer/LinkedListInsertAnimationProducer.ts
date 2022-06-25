import LinkedListAnimationProducer from './LinkedListAnimationProducer';
import GraphicalLinkedListNode from '../data-structure/GraphicalLinkedListNode';
import { getPointerPath } from '../util/util';
import { insertCodeSnippet } from '../util/codeSnippets';

// Class that produces SVG.Runners animating linked list operations specific to inserting
export default class LinkedListInsertAnimationProducer extends LinkedListAnimationProducer {
  public renderInsertCode(): void {
    this.renderCode(insertCodeSnippet);
  }

  public insertedNodePointToNext(newNode: GraphicalLinkedListNode) {
    if (newNode.next !== null) {
      newNode.pointerTarget.plot(
<<<<<<< HEAD
        getPointerPath(newNode.x, newNode.y, newNode.next.x, newNode.next.y, Style.UP_RIGHT) as any
=======
        getPointerPath(newNode.x, newNode.y, newNode.next.x, newNode.next.y) as any
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
      );
      this.addSequenceAnimation(newNode.pointerTarget.animate().attr({ opacity: 1 }));
    }
  }

  public pointToInsertedNode(node: GraphicalLinkedListNode) {
    this.addSequenceAnimation(
      node.pointerTarget
        .animate()
<<<<<<< HEAD
        .plot(getPointerPath(node.x, node.y, node.next.x, node.next.y, Style.DOWN_RIGHT) as any)
=======
        .plot(getPointerPath(node.x, node.y, node.next.x, node.next.y) as any)
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    );
  }
}
