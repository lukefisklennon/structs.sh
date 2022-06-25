import { SVG, Path, Element } from '@svgdotjs/svg.js';
import { topOffset, nodePathWidth, insertedNodeTopOffset, CURRENT, PREV } from '../util/constants';
import { actualNodeDiameter, strokeWidth, nodeDiameter } from '../../common/constants';
import AnimationProducer from '../../common/AnimationProducer';
import GraphicalLinkedListNode from '../data-structure/GraphicalLinkedListNode';
import { getPointerPath } from '../util/util';

// Class that produces SVG.Runners animating general linked list operations
export default abstract class LinkedListAnimationProducer extends AnimationProducer {
  public createNodeAt(index: number, newNode: GraphicalLinkedListNode, length: number) {
    let cx;
    let cy;
    if (index < length - 1) {
      cx = index * nodePathWidth + (3 * actualNodeDiameter) / 2;
      cy = insertedNodeTopOffset;
    } else {
      cx = length * nodePathWidth + actualNodeDiameter / 2;
      cy = topOffset;
    }
    newNode.boxTarget.cx(cx).cy(cy);
    newNode.numberTarget.cx(cx).cy(cy);
    this.addSequenceAnimation(newNode.boxTarget.animate().attr({ opacity: 1 }));
    this.addSequenceAnimation(newNode.numberTarget.animate().attr({ opacity: 1 }));
  }

  public initialisePointer(pointerId: string) {
    const pointerSvg: Element = SVG(pointerId);
    pointerSvg.move(nodePathWidth + strokeWidth / 2, topOffset + actualNodeDiameter / 2);
    this.addSequenceAnimation(pointerSvg.animate().attr({ opacity: 1 }));
  }

  public movePointerToNext(pointerId: string) {
    const pointerSvg: Element = SVG(pointerId);
    this.addSequenceAnimation(pointerSvg.animate().dx(nodePathWidth));
  }

  public resetPointers() {
    this.addSequenceAnimation(SVG(CURRENT).animate().attr({ opacity: 0 }));
    this.addSequenceAnimation(SVG(PREV).animate().attr({ opacity: 0 }));
  }

  public resetPositioning(headPointer: Path, head: GraphicalLinkedListNode) {
    let curr: GraphicalLinkedListNode = head;
    let index: number = 0;
    this.addSequenceAnimation(
      headPointer
        .animate()
        .plot(
          getPointerPath(
            actualNodeDiameter / 2,
            topOffset,
            nodePathWidth + actualNodeDiameter / 2,
<<<<<<< HEAD
            topOffset,
            Style.RIGHT
=======
            topOffset
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
          ) as any
        )
    );
    while (curr !== null) {
      const cx = (index + 1) * nodePathWidth + actualNodeDiameter / 2;
      this.addSequenceAnimation(curr.boxTarget.animate().cx(cx).cy(topOffset));
      this.addSequenceAnimation(curr.numberTarget.animate().cx(cx).cy(topOffset));
      this.addSequenceAnimation(
        curr.pointerTarget
          .animate()
<<<<<<< HEAD
          .plot(getPointerPath(cx, topOffset, cx + nodePathWidth, topOffset, Style.RIGHT) as any)
=======
          .plot(getPointerPath(cx, topOffset, cx + nodePathWidth, topOffset) as any)
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
      );
      index += 1;
      curr = curr.next;
    }
  }

  public resetList(headPointer: Path, head: GraphicalLinkedListNode) {
    this.resetPointers();
    this.resetPositioning(headPointer, head);
  }

  public newHeadPointToOldHead(newHead: GraphicalLinkedListNode) {
    newHead.pointerTarget.plot(
<<<<<<< HEAD
      getPointerPath(newHead.x, newHead.y, newHead.next.x, newHead.next.y, Style.UP_RIGHT) as any
=======
      getPointerPath(newHead.x, newHead.y, newHead.next.x, newHead.next.y) as any
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    );
    this.addSequenceAnimation(newHead.pointerTarget.animate().attr({ opacity: 1 }));
  }

  public pointHeadToPrependedNode(head: Path, newHead: GraphicalLinkedListNode) {
    this.addSequenceAnimation(
<<<<<<< HEAD
      head
        .animate()
        .plot(
          getPointerPath(nodeDiameter / 2, topOffset, newHead.x, newHead.y, Style.DOWN_RIGHT) as any
        )
=======
      head.animate().plot(getPointerPath(nodeDiameter / 2, topOffset, newHead.x, newHead.y) as any)
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    );
  }

  public initialiseHead(headPointer: Path) {
    this.addSequenceAnimation(headPointer.animate().attr({ opacity: 1 }));
  }

  public linkLastToNew(last: GraphicalLinkedListNode) {
<<<<<<< HEAD
    last.pointerTarget.plot(
      getPointerPath(last.x, last.y, last.next.x, last.next.y, Style.RIGHT) as any
    );
=======
    last.pointerTarget.plot(getPointerPath(last.x, last.y, last.next.x, last.next.y) as any);
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    this.addSequenceAnimation(last.pointerTarget.animate().attr({ opacity: 1 }));
  }
}
