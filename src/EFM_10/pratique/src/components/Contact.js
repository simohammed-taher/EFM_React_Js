import React from "react";

export default function Contact() {
  const handleClick = () => {
    window.location.href = "mailto:EFM@gmail.com";
  };

  return (
    <div>
      <button onClick={handleClick}>Envoyer Email</button>
    </div>
  );
}
