import { useEffect, useState } from "react";

function api() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userPost, setUserPost] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  function handleClick(id) {
    setUserPost(id);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des users</h1>
      {users.map((utilisateur, index) => {
        return (
          <div key={index}>
            <p>
              {utilisateur.name}
              <button onClick={() => handleClick(utilisateur.id)}>
                Détails des posts
              </button>
            </p>
            {userPost === utilisateur.id && (
              <ul>
                {posts
                  .filter((article) => article.userId === utilisateur.id)
                  .map((article) => (
                    <li key={article.id}>
                      {article.id} {article.title}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default api;
