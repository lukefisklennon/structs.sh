import AnimationProducer from '../../common/AnimationProducer';
import GraphicalSortsElement from '../data-structure/GraphicalSortsElement';
import { getCx, getX } from '../util/helpers';

export default class SortsAnimationProducer extends AnimationProducer {
    public highlightItem(item: GraphicalSortsElement, color: string) {
        this.addSequenceAnimation(item.boxTarget.animate(1).attr({ stroke: color }));
        this.addSequenceAnimation(item.boxTarget.animate(1).attr({ fill: color }));
        this.addSequenceAnimation(item.numberTarget.animate(1).attr({ fill: color }));
        this.addSequenceAnimation(item.boxTarget.animate());
    }

    public highlightBoxes(array: GraphicalSortsElement[], colour: string) {
        array.forEach((x) => {
            this.highlightItem(x, colour);
        });
    }

    public swap(
        from: GraphicalSortsElement,
        fromIndex: number,
        to: GraphicalSortsElement,
        toIndex: number
    ) {
        const xFrom = getX(fromIndex);
        const cxFrom = getCx(fromIndex);
        const xTo = getX(toIndex);
        const cxTo = getCx(toIndex);

        this.addSequenceAnimation(from.boxTarget.animate().x(xTo));
        this.addSequenceAnimation(from.numberTarget.animate().cx(cxTo));
        this.addSequenceAnimation(to.boxTarget.animate().x(xFrom));
        this.addSequenceAnimation(to.numberTarget.animate().cx(cxFrom));
    }
}
