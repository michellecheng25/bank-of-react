import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      <div className="logo">
        <Link to="/">
          <h3>Bank of React</h3>
        </Link>
      </div>
      <div className="navbar-links">
        <div className="navbar-link">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-link">
          <Link to="/login">Login</Link>
        </div>
        <div className="navbar-link">
          <Link to="/userprofile">Profile</Link>
        </div>
        <div className="navbar-link">
          <Link to="/credits">Credits</Link>
        </div>
        <div className="navbar-link">
          <Link to="/debits">Debits</Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
