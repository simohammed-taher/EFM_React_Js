import React from "react";
import { addlivre, removelivre } from "./action";
import { useSelector, useDispatch } from "react-redux";

export default function Livres() {
  const dispatch = useDispatch();
  const livres = useSelector((state) => state.livres.length);

  const handladd = () => {
    dispatch(addlivre({ type: "ADDLIVRE", ISBN: "isbnaddddd" }));
  };

  const handlDelet = () => {
    dispatch(removelivre({ type: "REMOVELIVRE", ISBN: "isbnaddddd" }));
  };

  return (
    <div>
      <h2>Livres</h2>
      <button onClick={handladd}>AddLivre</button>
      <button onClick={handlDelet}>DeletLivre</button>
    </div>
  );
}
