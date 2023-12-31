import React from "react";
import Concatenation from "./EFM_6/Partie Pratique/Exercice1/Concatenation";
import Compteur from "./EFM_6/Partie Pratique/Exercice2/Compteur";
import MachinePanier from "./EFM_6/Partie Pratique/Exercice3/MachinePanier";
import Machine from "./EFM_6/Partie Pratique/Exercice3/Machine";
import ListMachine from "./EFM_6/Partie Pratique/Exercice3/ListMachine";
const App = () => {
  return (
    <div>
      <Concatenation />
      <Compteur debut={232} fin={10} pas={2} />
      <Compteur debut={10} fin={0} pas={3} />
      <ListMachine /> <Machine />
      <MachinePanier />
    </div>
  );
};

export default App;

// import Appp from "./EFM_4/Partie2/Appp";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ListeVoyages from "./EFM_2/Pratique/ListeVoyages ";
// import DetailsVoyage from "./EFM_2/Pratique/DetailsVoyage ";
// import Ex1 from "./EFM_3/Partie pratique/Exercice1/Calculatrice";
// import CarteLivre from "./EFM_3/Partie pratique/Exercice2/CarteLivre";
// import { useSelector, useDispatch } from "react-redux";
// import likeBook from "./EFM_3/Partie pratique/Exercice2/reducer";
// import Ex4 from "./EFM_3/Partie pratique/Exercice3/Ex4";
// import Cinputs from "./EFM_4/Partie2/Cinputs";
// const voyages = [
//   {
//     id: 1,
//     intitule: "Istanbul La magnifique",
//     prix: "8900 DH",
//     source: "image1.jpg",
//   },
//   {
//     id: 2,
//     intitule: "Découverte de Dakhla",
//     prix: "4500 DH",
//     source: "image2.jpg",
//   },
//   {
//     id: 3,
//     intitule: "Safari à Kenya",
//     prix: "25000 DH",
//     source: "image3.jpg",
//   },
//   {
//     id: 4,
//     intitule: "Soleil et mer: Espagne",
//     prix: "7000 DH",
//     source: "image4.jpg",
//   },
// ];

// ---------------------------------------------------------------------------

// const books = useSelector((state) => state.books);
// const dispatch = useDispatch();

// const handleLike = (bookId) => {
//   dispatch(likeBook(bookId));
// };

// ---------------------------------------
// <div>
//   <div>
//     {/* <BrowserRouter>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<ListeVoyages voyages={voyages} />} />
//           <Route
//             path="/voyage/:id"
//             element={<DetailsVoyage voyages={voyages} />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </BrowserRouter> */}
//   </div>
//   <div>{/* <Ex1 /> */}</div>
//   <div>
//     {/* {books.map((book) => (
//         <CarteLivre
//           key={book.id}
//           livre={book}
//           onLike={() => handleLike(book.id)} */}
//     {/* /> */}
//     {/* ))} */}
//   </div>
//   <div>{/* <Ex4 /> */}</div>
//   <div>
//     {/* <Appp /> */}
//     {/* <Cinputs /> */}
//   </div>
// </div>;
