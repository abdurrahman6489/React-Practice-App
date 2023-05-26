import React from "react";
import "../../App.css";
import "./Nav.css";
function Nav({ children }) {
  return <nav className="nav">{children}</nav>;
}
export default Nav;
