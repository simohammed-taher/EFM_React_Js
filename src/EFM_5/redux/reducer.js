const ADD_STAGIAIRE = "ADD_STAGIAIRE";
const initialState = {
  stagiaires: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STAGIAIRE:
      return {
        ...state,
        stagiaires: [...state.stagiaires, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
