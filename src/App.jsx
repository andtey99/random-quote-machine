import React, { useState } from "react";
import "./App.css"
import randomColor from "./components/randomColor";
import QuoteBox from "./components/quoteBox";

function App() {
  const [color, setColor] = useState(randomColor());
  let rgb = `rgb(${color.toString()}, 0.7)`;

  return (
    <>
      <QuoteBox color={rgb}/>
    </>
  );
}

export default App;
