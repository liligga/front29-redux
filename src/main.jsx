import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import "./index.css";
import App from "./App";

const initialState = {
  counter: 100,
};

// {type: "INCREASE"}
// {type: "DECREASE"}
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: state.counter + action.payload };
    case "DECREASE":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};


const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
