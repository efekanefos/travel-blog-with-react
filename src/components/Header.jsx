import React from "react";
import logo from ".././assets/images/HeaderImages/logo.png";
import searchIcon from ".././assets/images/HeaderImages/search_icon.png";
import ".././assets/styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__leftContent">
        <div className="logoContent">
          <img src={logo} alt="Logo" className="logoContent__img" />
        </div>
      </div>

      <div className="header__centerContent">
        <ul className="headerMenu">
          <li className="headerMenu__listItem">
            <a href="/" className="headerMenu__listItemLink">
              DESTINATIONS
            </a>
          </li>

          <li className="headerMenu__listItem">
            <a href="/" className="headerMenu__listItemLink">
              FOOD
            </a>
          </li>

          <li className="headerMenu__listItem">
            <a href="/" className="headerMenu__listItemLink">
              WELL BEING
            </a>
          </li>

          <li className="headerMenu__listItem">
            <a href="/" className="headerMenu__listItemLink">
              SPORT
            </a>
          </li>

          <li className="headerMenu__listItem">
            <a href="/" className="headerMenu__listItemLink">
              FAMILY
            </a>
          </li>

          <li className="headerMenu__listItem">
            <a href="/" className="headerMenu__listItemLink">
              LIFESTYLE
            </a>
          </li>
        </ul>
      </div>
      <div className="header__rightContent">
        {/* Search */}
        <div className="headerSearchContent">
          <div className="headerSearch__imgContent">
            <img src={searchIcon} alt="Search" className="headerSearch__img" />
          </div>
        </div>
        {/* Gift Coupon */}
        <a href="/" className="headerCouponContent">
          Get your 120$ christmas gift
        </a>
      </div>
    </header>
  );
}

export default Header;
