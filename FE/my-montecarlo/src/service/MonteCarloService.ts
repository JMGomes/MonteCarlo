import {getPoints} from "../api/requests/getPoints";
import {Point} from "../model/Point";

const MAX_BATCH_VALUE = 1000000;

export interface MonteCarloResult {
  piCalculated: number;
  pointsGenerated: number;
  pointsInside: number;
}

export const monteCarlo = async (n: number): Promise<MonteCarloResult> => {
  let pointsProcessedInside = 0;
  let pointsProcessedTotal = 0;

  while (pointsProcessedTotal !== n) {
    // divide by batches
    let pointsRemaining = n - pointsProcessedTotal;
    let pointsToProcess = Math.min(pointsRemaining, MAX_BATCH_VALUE);
    console.log(`Processing ${pointsToProcess} points. Points already processed: ${pointsProcessedTotal}/${n}`);
    console.log(`Current PI is ${calculatePi(pointsProcessedInside, pointsProcessedTotal)}`);
    const points: Point[] = await getPoints(pointsToProcess);

    for (let i = 0; i < points.length; i++) {
      let p = points[i];
      if (Math.pow(p.x, 2) + Math.pow(p.y, 2) < 1) {
        pointsProcessedInside++;
      }
      pointsProcessedTotal++;
    }
  }
  return {
    piCalculated: calculatePi(pointsProcessedInside, pointsProcessedTotal),
    pointsGenerated: pointsProcessedTotal,
    pointsInside: pointsProcessedInside
  }
}


const calculatePi = (pointsInside: number, pointsTotal: number) => {
  return 4 * pointsInside / pointsTotal;
}