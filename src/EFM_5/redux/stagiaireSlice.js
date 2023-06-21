export const addStagiaire = (stagiaire) => {
  return {
    type: "ADD_STAGIAIRE",
    payload: { stagiaire },
  };
};
