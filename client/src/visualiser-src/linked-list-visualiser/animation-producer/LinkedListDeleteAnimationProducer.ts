import { Path } from '@svgdotjs/svg.js';
import LinkedListAnimationProducer from './LinkedListAnimationProducer';
import GraphicalLinkedListNode from '../data-structure/GraphicalLinkedListNode';
import { Style, getPointerPath } from '../util/util';
import { deleteCodeSnippet } from '../util/codeSnippets';
import { topOffset } from '../util/constants';

// Class that produces SVG.Runners animating linked list operations specific to deleting
export default class LinkedListDeleteAnimationProducer extends LinkedListAnimationProducer {
  public renderDeleteCode() {
    this.renderCode(deleteCodeSnippet);
  }

  public setNextToNull(node: GraphicalLinkedListNode) {
    this.addSequenceAnimation(node.pointerTarget.animate().attr({ opacity: 0 }));
  }

  public setHeadToNull(headPointer: Path) {
    this.addSequenceAnimation(headPointer.animate().attr({ opacity: 0 }));
  }

  public morphNextPointerToArc(node: GraphicalLinkedListNode) {
    this.addSequenceAnimation(
      node.pointerTarget
        .animate()
<<<<<<< HEAD
        .plot(getPointerPath(node.x, node.y, node.next.x, node.next.y, Style.CURVED_RIGHT) as any)
=======
        .plot(getPointerPath(node.x, node.y, node.next.x, node.next.y, Style.CURVED) as any)
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    );
  }

  public deleteNode(node: GraphicalLinkedListNode) {
    this.addSequenceAnimation(node.pointerTarget.animate().attr({ opacity: 0 }));
    this.addSequenceAnimation(node.numberTarget.animate().attr({ opacity: 0 }));
    this.addSequenceAnimation(node.boxTarget.animate().attr({ opacity: 0 }));
  }

  public pointHeadToNext(headPointer: Path, next: GraphicalLinkedListNode) {
    this.addSequenceAnimation(
<<<<<<< HEAD
      headPointer
        .animate()
        .plot(getPointerPath(0, topOffset, next.x, next.y, Style.CURVED_RIGHT) as any)
=======
      headPointer.animate().plot(getPointerPath(0, topOffset, next.x, next.y, Style.CURVED) as any)
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    );
  }
}
