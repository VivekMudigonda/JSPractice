import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { arc } from "d3";

const mouthRadius = 40;
const mouthWidth = 2;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

function App() {
  const [count, setCount] = useState(0);
  const width = 960;
  const height = 150;
  const strokeWidth = 2;
  const eye = 15;
  const eyeOffsetX = 40;
  const eyeOffsetY = 25;

  return (
    <div className="bod">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <svg height={height} width={width}>
        <g transform={`translate(${width / 2},${height / 2})`}>
          <circle
            r={height / 2 - strokeWidth / 2}
            fill="yellow"
            stroke="white"
            stroke-width={strokeWidth}
          />
          <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eye} fill="#F1C27D" />
          <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eye} fill="#F1C27D" />
          <path d={mouthArc()} fill="black" />
        </g>
      </svg>
    </div>
  );
}

export default App;
