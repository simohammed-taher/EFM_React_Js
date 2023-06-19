const LIKE_BOOK = "LIKE_BOOK";
export const likeBook = (bookId) => {
  return {
    type: LIKE_BOOK,
    payload: bookId,
  };
};
