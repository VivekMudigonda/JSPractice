import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Face } from "./Face.jsx";

function App() {
  const [count, setCount] = useState(0);

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
      <Face
        width={960}
        height={150}
        strokeWidth={2}
        eye={15}
        eyeOffsetX={40}
        eyeOffsetY={25}
        mouthRadius={40}
        mouthWidth={2}
      />
    </div>
  );
}

export default App;
