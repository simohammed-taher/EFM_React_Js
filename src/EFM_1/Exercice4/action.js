export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export function add_article(articles) {
  return {
    type: "addArticle",
    payload: articles,
  };
}
export function delete_article(id) {
  return {
    type: "DeleteArticle",
    payload: id,
  };
}
