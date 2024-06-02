import react from "react";
import { Fragment, default as React } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const Nav = () => {
  return (
    <Fragment>
      <div className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">Gangstaqueen</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
