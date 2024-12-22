import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import "./App.css";
import Calendar from "./Calendar.jsx";

function App() {
  return (
    <div className="container">
      <Calendar />
    </div>
  );
}

export default App;
