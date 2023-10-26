const initialState = {
  livres: [],
};

const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDLIVRE":
      return {
        ...state,
        livres: [...state.livres, action.ISBN],
      };
    case "REMOVELIVRE":
      return {
        ...state,
        livres: state.livres.filter((livre) => livre !== action.ISBN),
      };
    default:
      return state;
  }
};

export default panierReducer;
