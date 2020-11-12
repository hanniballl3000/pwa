import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";

const TestC = React.lazy(() => import("./TestC"));

function App() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setIsHidden(false)}>click me</button>
        {isHidden ? null : (
          <Suspense fallback={<div>loading...</div>}>
            <TestC />
          </Suspense>
        )}
      </header>
    </div>
  );
}

export default App;
