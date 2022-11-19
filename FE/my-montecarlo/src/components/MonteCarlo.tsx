import {monteCarlo, MonteCarloResult} from "../service/MonteCarloService";
import React, {useState} from "react";

export const MonteCarlo = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MonteCarloResult | null>(null);

  const onClick = async () => {
    reset();
    const monteCarloResult: MonteCarloResult = await monteCarlo(Number(input));
    setResult(monteCarloResult);
    setLoading(false);
  }

  const reset = () => {
    setLoading(true);
    setResult(null);
  }

  return (
      <>
        {loading &&
        <p>Loading...</p>
        }
        {!loading &&
            <>
              <label htmlFor="nPoints">Number of points to calculate PI:</label>
              <input type="number" onChange={value => setInput(value.currentTarget.value)} id="nPoints" name="nPoints" min="2" />
              <button disabled={input===''} onClick={onClick}>Calculate</button>
              {result!==null &&
                  <>
                  <h1>PI value calculate with {result.pointsGenerated} points: {result.piCalculated}</h1>
                  <h5>Points inside: {result.pointsInside}/{result.pointsGenerated}</h5>
                  </>
              }
            </>
        }


      </>
  )
}