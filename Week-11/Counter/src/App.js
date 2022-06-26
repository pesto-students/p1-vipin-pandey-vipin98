import "./App.css";
import { CounterStateData, setCounter } from "./Redux/features/CounterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const Counter = useSelector(CounterStateData);
  const dispatch = useDispatch();
  const counter = () => {
    dispatch(setCounter(Counter + 1));
  };
  const ResetCounter = () => {
    dispatch(setCounter("clear"));
  };
  // const lightedness = Flip ? "lit" : "dark";
  return (
    // <div className="App">
    <div className={`Container`}>
      <h1> you've walked {Counter} steps today!</h1>
      <br />
      <button onClick={counter} className={`Addbtn`}>
        Add a Step
      </button>
      <br />
      <button onClick={ResetCounter} className={`Resetbtn`}>
        Reset Steps
      </button>
    </div>
    // </div>
  );
}

export default App;
