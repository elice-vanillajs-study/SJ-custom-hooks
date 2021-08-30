import React, { useState } from "react";
import "./App.css";
import { useInput } from "./useInput";

function App() {
  const maxLen = (value) => value.length <= 10;
  const isNotEmail = (value) => !value.includes("@");
  const name = useInput("Mr.", isNotEmail);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
