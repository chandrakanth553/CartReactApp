import React from "react";

const NavBar = ({ counter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        <h1>
          Cart <span className="badge badge-secondary">{counter}</span>{" "}
        </h1>
      </a>
    </nav>
  );
};

export default NavBar;
