import { SVG, Path, Text, Circle, Svg, Marker } from '@svgdotjs/svg.js';
import {
  shapeAttributes,
  textAttributes,
  pathAttributes,
  topOffset,
  nodePathWidth,
} from '../util/constants';
<<<<<<< HEAD
import { getPointerPath, Style } from '../util/util';
import { actualNodeDiameter, markerLength, nodeDiameter, pathD, VISUALISER_CANVAS } from '../../common/constants';
=======
import { getPointerPath } from '../util/util';
import { actualNodeDiameter, markerLength, pathD, VISUALISER_CANVAS } from '../../common/constants';
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8

function addMarker(add: Marker) {
  add.path(pathD);
  this.attr('markerUnits', 'userSpaceOnUse');
}
interface SVGData {
  pointerTarget: Path;
  boxTarget: Circle;
  numberTarget: Text;
}

interface GraphicalLinkedListNodeData {
  value: number;
  svgData: SVGData;
}
export default class GraphicalLinkedListNode {
  private _data: GraphicalLinkedListNodeData;

  private _next: GraphicalLinkedListNode;

  private constructor(data: GraphicalLinkedListNodeData) {
    this._data = data;
    this._next = null;
  }

  public static newHeadPointer() {
<<<<<<< HEAD
    SVG().text('head').attr(textAttributes).opacity(1).attr({ 'font-size': 16 }).addTo(VISUALISER_CANVAS);
=======
    SVG()
      .text('head')
      .attr(textAttributes)
      .opacity(1)
      .attr({ 'font-size': 16 })
      .addTo(VISUALISER_CANVAS);
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    const headPointer = SVG()
      .path()
      .attr(pathAttributes)
      .opacity(0)
      .plot(
        getPointerPath(
          actualNodeDiameter / 2,
          topOffset,
          actualNodeDiameter / 2 + nodePathWidth,
<<<<<<< HEAD
          topOffset,
          Style.RIGHT
=======
          topOffset
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
        )
      )
      .addTo(VISUALISER_CANVAS);

<<<<<<< HEAD
    console.log(headPointer);

=======
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    headPointer.marker('end', markerLength, markerLength, addMarker);
    return headPointer;
  }

  public static from(input: number) {
    const canvas = SVG(VISUALISER_CANVAS) as Svg;
<<<<<<< HEAD
    const nodeShape = canvas.circle().attr(shapeAttributes);
    const nodeValue = canvas.text(String(input)).attr(textAttributes);
    const newPointer = canvas.path().attr(pathAttributes);
=======
    const newPointer = canvas.path().attr(pathAttributes);
    const nodeShape = canvas.circle().attr(shapeAttributes);
    const nodeValue = canvas.text(String(input)).attr(textAttributes);
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    newPointer.marker('end', markerLength, markerLength, addMarker);
    return new GraphicalLinkedListNode({
      value: input,
      svgData: {
        numberTarget: nodeValue,
        boxTarget: nodeShape,
        pointerTarget: newPointer,
      },
    });
  }

  public get data() {
    return this._data;
  }

  public get next() {
    return this._next;
  }

  public set next(next: GraphicalLinkedListNode) {
    this._next = next;
  }

  public get value() {
    return this._data.value;
  }

  public get pointerTarget() {
    return this._data.svgData.pointerTarget;
  }

  public get boxTarget() {
    return this._data.svgData.boxTarget;
  }

  public get numberTarget() {
    return this._data.svgData.numberTarget;
  }

  public get x(): number {
    return this.boxTarget.attr('cx');
  }

  public get y(): number {
    return this.boxTarget.attr('cy');
  }
}
