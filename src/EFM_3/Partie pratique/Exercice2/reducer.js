import { createStore } from "redux";
const LIKE_BOOK = "LIKE_BOOK";
const initialState = {
  books: [
    {
      id: 1,
      titre: "RESTful Java Web Services",
      Auteur: "David lu",
      Edition: "Packt",
      Poster: "livre1",
      likes: 0,
    },
    {
      id: 2,
      titre: "REST API Development With Node.js",
      Auteur: "Fernando Daglio",
      Edition: "Apress",
      Poster: "livre2",
      likes: 0,
    },
    {
      id: 3,
      titre: "REST API Development With Node.js",
      Auteur: "Fernando Daglio",
      Edition: "Apress",
      Poster: "livre3",
      likes: 0,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_BOOK:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload) {
            return {
              ...book,
              likes: book.likes + 1,
            };
          }
          return book;
        }),
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
