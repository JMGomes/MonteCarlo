import {Point} from "../../model/Point";

export const getPoints = async (n: number): Promise<Point[]> => {
  const res = await fetch('http://localhost:8080', {
    method: 'GET',
    headers: {
      "numberstogenerate": n.toString()
    }
  });
  return await res.json();
}