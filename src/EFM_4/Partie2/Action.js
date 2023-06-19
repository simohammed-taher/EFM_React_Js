export const add = (value1, value2) => {
  return {
    type: "ADD",
    payload: { value1, value2 },
  };
};

export const subtract = (value1, value2) => {
  return {
    type: "SUBTRACT",
    payload: { value1, value2 },
  };
};

export const multiply = (value1, value2) => {
  return {
    type: "MULTIPLY",
    payload: { value1, value2 },
  };
};

export const divide = (value1, value2) => {
  return {
    type: "DIVIDE",
    payload: { value1, value2 },
  };
};
