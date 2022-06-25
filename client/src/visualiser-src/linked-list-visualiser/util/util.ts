import { actualNodeDiameter, markerLength } from '../../common/constants';
import { getPointerStartEndCoordinates } from '../../common/helpers';

export enum Style {
<<<<<<< HEAD
  RIGHT,
  CURVED_RIGHT,
  DOWN_RIGHT,
  UP_RIGHT,
=======
  STRAIGHT,
  CURVED,
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
}

export const getPointerPath = (
  startCentreX: number,
  startCentreY: number,
  endCentreX: number,
  endCentreY: number,
<<<<<<< HEAD
  style: Style
=======
  style: Style = Style.STRAIGHT
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
) => {
  const [[startX, startY], [endX, endY]] = getPointerStartEndCoordinates(
    startCentreX,
    startCentreY,
    endCentreX,
    endCentreY
  );
<<<<<<< HEAD
  return style === Style.CURVED_RIGHT
=======
  return style === Style.CURVED
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
    ? `M ${startX - actualNodeDiameter / 2 + (actualNodeDiameter / 2) * Math.cos(Math.PI / 4)},${
        startY - (actualNodeDiameter / 2) * Math.sin(Math.PI / 4)
      } Q ${(startX + endX) / 2 + markerLength / 4},-30 ${
        endX +
        (actualNodeDiameter + markerLength) / 2 +
        -((actualNodeDiameter + markerLength) / 2) * Math.cos(Math.PI / 4)
      },${endY - ((actualNodeDiameter + markerLength) / 2) * Math.sin(Math.PI / 4)}`
    : `M ${startX},${startY} Q ${(startX + endX) / 2},${(startY + endY) / 2} ${endX},${endY}`;
};
