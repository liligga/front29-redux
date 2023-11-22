import { useSelector, useDispatch } from "react-redux";

// action creator
const increaseCounter = () => {
  return { type: "INCREASE" };
};

const CounterPage = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
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
