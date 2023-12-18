import { useState } from "react";
import "./button.css";

export function Button({ name, icons }) {
  const [] = useState("");

  const linkButton = [];
  return (
    <>
      <button className="social-buttons">
        {icons}
        {name}
      </button>
    </>
  );
}
