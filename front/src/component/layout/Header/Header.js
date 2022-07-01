import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-cart" />
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <i className="fas fa-bars"></i>
          </label>
          <div className="content">
            <div className="logo">
              <a href="/">Inventory</a>
            </div>
            <ul className="links">
              <li>
                <a href="#" className="desktop-link">
                  Products
                </a>
                <input type="checkbox" id="show-items" />
                <label htmlFor="show-items">Products</label>
                <ul>
                  <li>
                    <a href="/product/new" className="desktop-link">
                      Create New Product
                    </a>
                  </li>
                  <li>
                    <a href="/products">View All</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="desktop-link">
                  Category
                </a>
                <input type="checkbox" id="show-services" />
                <label htmlFor="show-services"></label>
                <ul>
                  <li>
                    <a href="/category/new">Create New Category</a>
                  </li>
                  <li>
                    <a href="/categories">View All</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="desktop-link">
                  My Profile
                </a>
                <input type="checkbox" id="show-services" />
                <label htmlFor="show-services"></label>
                <ul>
                  <li>
                    <a href="/me/update">Update Profile</a>
                  </li>
                  <li>
                    <a href="/password/update">Update Password</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="right">
            <li>
              <a className="search-icon" href="/login">
                Login
              </a>{" "}
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
