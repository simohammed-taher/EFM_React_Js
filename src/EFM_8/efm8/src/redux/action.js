export const addlivre = (newlivre) => {
  return {
    type: "ADDLIVRE",
    payload: newlivre,
  };
};

export const removelivre = (id) => {
  return {
    type: "REMOVELIVRE",
    payload: id,
  };
};
