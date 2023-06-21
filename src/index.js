import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
// import { Provider } from "react-redux";

// import store from "./EFM_5/redux/Store";
// // import store from "./EFM_1/Exercice4/store";
// import store from "./EFM_1/Exercice4/store";

// import store from "./EFM_3/Partie pratique/Exercice2/reducer";
// import store from "./EFM_4/Partie2/Store";
