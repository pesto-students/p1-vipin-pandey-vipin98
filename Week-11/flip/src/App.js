import { useState } from "react";
import "./App.css";
import { FlipStateData, setFlip } from "../src/Redux/features/FlipSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const Flip = useSelector(FlipStateData);
  const dispatch = useDispatch();
  const flipLight = () => {
    dispatch(setFlip(!Flip));
  };
  const lightedness = Flip ? "lit" : "dark";
  return (
    // <div className="App">
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
    // </div>
  );
}

export default App;
