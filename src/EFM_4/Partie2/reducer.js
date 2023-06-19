const initialState = {
  value1: 0,
  value2: 0,
  result: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        result: action.payload.value1 + action.payload.value2,
      };
    case "SUBTRACT":
      return {
        ...state,
        result: action.payload.value1 - action.payload.value2,
      };
    case "MULTIPLY":
      return {
        ...state,
        result: action.payload.value1 * action.payload.value2,
      };
    case "DIVIDE":
      return {
        ...state,
        result: action.payload.value1 / action.payload.value2,
      };
    default:
      return state;
  }
};

export default reducer;
