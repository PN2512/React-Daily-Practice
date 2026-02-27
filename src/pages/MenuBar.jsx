import { Link } from "react-router-dom";
import React from "react";
import "./MenuBar.css";
const MenuBar = () => {
  return (
    <>
      <ol className="menu-bar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/register">
          <li>Register User</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ol>
    </>
  );
};

export default MenuBar;
