import React from "react";
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import "./Header.css";
const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
              Track Books
          </h2><br />
          <p className="header-text"></p>
          <div> <SearchForm /> </div>
        </div>
      </header>
    </div>
  )
}

export default Header