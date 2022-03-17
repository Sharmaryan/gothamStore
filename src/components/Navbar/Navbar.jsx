import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
    
      <nav className="nav-menu">
        <h1 className="nav-menu-logo">
          <Link to='/' className="text-decorations text-white">
            Gotham Store
          </Link>
        </h1>
        <div className="search">
          <i className="fas fa-search search-background"></i>
          <input type="text" placeholder="search products" className="search-bar" />
        </div>
        <div className="menu">
          <ul>
            <li className="menu-items">
              <Link to="/signup" className="text-decorations text-white">
                sign up
              </Link>
            </li>
            <li className="menu-items">
              <Link to="login" className="text-decorations text-white">
                login
              </Link>
            </li>
            <li className="menu-items fas-icons">
              <Link to="wishlist" className="text-decorations text-white">
                {" "}
                <i className="fas fa-heart"></i>{" "}
              </Link>
              <div className="count-items">0</div>
            </li>
            <li className="menu-items fas-icons">
              <Link to="cart" className="text-decorations text-white">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              <div className="count-items">0</div>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
}
