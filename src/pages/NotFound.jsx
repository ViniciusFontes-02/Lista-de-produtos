import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Desculpa!</h2>

      <p>Está pagina não existe</p>
      <Link to="/">Voltar para pagina inicial</Link>
    </div>
  );
}
