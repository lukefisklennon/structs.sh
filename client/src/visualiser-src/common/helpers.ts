import { actualNodeDiameter, markerLength } from './constants';
<<<<<<< HEAD
import { Documentation } from './typedefs';
=======
import { DataStructure, Documentation } from './typedefs';
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8

/**
 * Calculates the starting and ending coordinates of a pointer, given the coordinates of the centres of the
 * originating nodes and target nodes.
 * It is calculated such that the pointer starts and ends at the edge of a node, rather than the centre.
 */
export const getPointerStartEndCoordinates = (
  startCentreX: number,
  startCentreY: number,
  endCentreX: number,
  endCentreY: number
): [[number, number], [number, number]] => {
  const nodeRadius = actualNodeDiameter / 2;
  const theta: number = Math.atan(
    Math.abs(startCentreX - endCentreX) / Math.abs(startCentreY - endCentreY)
  );
  let startX;
  let endX;
  if (startCentreX < endCentreX) {
    startX = startCentreX + nodeRadius * Math.sin(theta);
    endX = endCentreX - (nodeRadius + markerLength / 2) * Math.sin(theta);
  } else {
    startX = startCentreX - nodeRadius * Math.sin(theta);
    endX = endCentreX + (nodeRadius + markerLength / 2) * Math.sin(theta);
  }
  let startY;
  let endY;
  if (startCentreY < endCentreY) {
    startY = startCentreY + nodeRadius * Math.cos(theta);
    endY = endCentreY - (nodeRadius + markerLength / 2) * Math.cos(theta);
  } else {
    startY = startCentreY - nodeRadius * Math.cos(theta);
    endY = endCentreY + (nodeRadius + markerLength / 2) * Math.cos(theta);
  }
  return [
    [startX, startY],
    [endX, endY],
  ];
};

let operationId = 0;

export const injectIds = (documentation: Documentation): Documentation => {
  Object.values(documentation).forEach((operationUsage) => {
    operationUsage.id = operationId;
    operationId += 1;
  });

  return documentation;
};
<<<<<<< HEAD
=======

export const isImplemented = (topicTitle: string): boolean =>
  Object.values(DataStructure).includes(topicTitle.toLowerCase() as DataStructure);

export const getTopics = (): string[] => Object.values(DataStructure);
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
