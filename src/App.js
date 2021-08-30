import React, { useState } from "react";
import "./App.css";
import { useInput } from "./useInput";
import { useTab } from "./useTab";
import { content } from "./constant";

function App() {
  const { currentItem, changeItem } = useTab(0, content);
  const maxLen = (value) => value.length <= 10;
  const isNotEmail = (value) => !value.includes("@");
  const name = useInput("Mr.", isNotEmail);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
