import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Test(props) {
  const style = {
    color: props.color,
  };

  return (
    <div>
      <h1>안녕 이건 테스트야</h1>
      <h2 style={style}>
        {props.title} + {props.eundy}
      </h2>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const testObject = {
    title: "2nd Test",
    eundy: "custuom",
    color: "red",
  };

  return (
    <>
      <Test {...testObject} />
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
    </>
  );
}

export default App;
