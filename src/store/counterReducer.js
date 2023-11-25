const initialState = {
  value: 100,
};

// {type: "INCREASE"}
// {type: "DECREASE"}
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, value: state.value + action.payload };
    case "DECREASE":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

// action creator
// increaseCounter("10")
export const increaseCounter = (payload) => ({
  type: "INCREASE",
  payload: Number(payload),
});
