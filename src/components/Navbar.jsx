import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>ViniStock</h1>
      <div className="link">
        <Link to="/">Home</Link>

        <Link to="/create">Novo produto</Link>
      </div>
    </nav>
  );
}
