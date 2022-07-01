import { SVG, Path, Element } from '@svgdotjs/svg.js';
import { topOffset, nodePathWidth, insertedNodeTopOffset, CURRENT, PREV } from '../util/constants';
import { actualNodeDiameter, strokeWidth, nodeDiameter } from '../../common/constants';
import AnimationProducer from '../../common/AnimationProducer';
import GraphicalLinkedListNode from '../data-structure/GraphicalLinkedListNode';
import { getPointerPath } from '../util/util';

// Class that produces SVG.Runners animating general linked list operations
export default abstract class LinkedListAnimationProducer extends AnimationProducer {
  // takes three parameters
  // first is the index to be inserted
  // second is the node to be created
  // third is the total length of the current list
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
    // set svg to the new node
    newNode.boxTarget.cx(cx).cy(cy);
    newNode.numberTarget.cx(cx).cy(cy);
    // let the nodes appear
    this.addSequenceAnimation(newNode.boxTarget.animate().attr({ opacity: 1 }));
    this.addSequenceAnimation(newNode.numberTarget.animate().attr({ opacity: 1 }));
  }

  public initialisePointer(pointerId: string) {
    // set up the pointer
    const pointerSvg: Element = SVG(pointerId);
    // let pointer moves
    pointerSvg.move(nodePathWidth + strokeWidth / 2, topOffset + actualNodeDiameter / 2);
    // the pointer should always appear
    this.addSequenceAnimation(pointerSvg.animate().attr({ opacity: 1 }));
  }

  public movePointerToNext(pointerId: string) {
    const pointerSvg: Element = SVG(pointerId);
    this.addSequenceAnimation(pointerSvg.animate().dx(nodePathWidth));
  }

  public resetPointers() {
    // previous and current pointers disappear
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
            topOffset
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
          .plot(getPointerPath(cx, topOffset, cx + nodePathWidth, topOffset) as any)
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
      getPointerPath(newHead.x, newHead.y, newHead.next.x, newHead.next.y) as any
    );
    this.addSequenceAnimation(newHead.pointerTarget.animate().attr({ opacity: 1 }));
  }

  public pointHeadToPrependedNode(head: Path, newHead: GraphicalLinkedListNode) {
    this.addSequenceAnimation(
      head.animate().plot(getPointerPath(nodeDiameter / 2, topOffset, newHead.x, newHead.y) as any)
    );
  }

  public initialiseHead(headPointer: Path) {
    this.addSequenceAnimation(headPointer.animate().attr({ opacity: 1 }));
  }

  public linkLastToNew(last: GraphicalLinkedListNode) {
    last.pointerTarget.plot(getPointerPath(last.x, last.y, last.next.x, last.next.y) as any);
    this.addSequenceAnimation(last.pointerTarget.animate().attr({ opacity: 1 }));
  }
}
