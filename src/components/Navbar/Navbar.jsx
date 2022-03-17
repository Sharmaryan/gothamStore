import React from 'react'

export const Navbar = () => {
  return (
    <div>
    
      <nav className="nav-menu">
        <h1 className="nav-menu-logo">
          <a href="#" className="text-decorations text-white">
            Gotham Store
          </a>
        </h1>
        <div className="search">
          <i className="fas fa-search search-background"></i>
          <input type="text" placeholder="search products" className="search-bar" />
        </div>
        <div className="menu">
          <ul>
            <li className="menu-items">
              <a href="#" className="text-decorations text-white">
                sign up
              </a>
            </li>
            <li className="menu-items">
              <a href="#" className="text-decorations text-white">
                login
              </a>
            </li>
            <li className="menu-items fas-icons">
              <a href="#" className="text-decorations text-white">
                {" "}
                <i className="fas fa-heart"></i>{" "}
              </a>
              <div className="count-items">0</div>
            </li>
            <li className="menu-items fas-icons">
              <a href="#" className="text-decorations text-white">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <div className="count-items">0</div>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
}
