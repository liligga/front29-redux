import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter } from "../store/counterReducer";

const CounterPage = () => {
  const [increment, setIncrement] = useState(1);
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter(increment));
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <input
          type="number"
          value={increment}
          onChange={(e) => setIncrement(e.target.value)}
        />
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>{value}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
