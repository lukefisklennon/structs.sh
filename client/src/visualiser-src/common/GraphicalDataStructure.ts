import { SVG } from '@svgdotjs/svg.js';
import { Documentation } from './typedefs';
<<<<<<< HEAD
import { VISUALISER_CANVAS} from './constants';
=======
import { CODE_CANVAS, VISUALISER_CANVAS } from './constants';
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8

abstract class GraphicalDataStructure {
  public constructor() {
    SVG(VISUALISER_CANVAS).clear();
<<<<<<< HEAD
=======
    SVG(CODE_CANVAS).clear();
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
  }

  public abstract get documentation(): Documentation;
}

export default GraphicalDataStructure;
