import React, { useState, useEffect } from "react";
import "./styles/App.css"
import randomColor from "./components/randomColor";
import QuoteBox from "./components/quoteBox";
import getQuotes from "./API/quotes";

function App() {
  const [quotes, setQuotes] = useState();
  const [color, setColor] = useState(randomColor());
  let rgb = `rgb(${color.toString()})`;

  useEffect(() => {
    getQuotes().then(result => setQuotes(result));
  }, []);

  return (
    <div className="wrapper" style={{backgroundColor: rgb}}>
      {quotes && <QuoteBox quotes={quotes} color={rgb} newColor={setColor}/>}
      <a className="author" href="https://github.com/andtey99">GitHub: andtey99</a>
    </div>
  );
}

export default App;
