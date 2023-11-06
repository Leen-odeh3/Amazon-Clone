import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.scss";
import { useTranslation } from "react-i18next";
import { getAuth, signOut } from "firebase/auth";

import { auth } from "./../../Firebase/config.js";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const { t, i18n } = useTranslation();

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="/header-logo.png" alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <i
          className="bi bi-search header-searchIcon"
          style={{ Color: "black" }}
        ></i>
      </div>
      <div className="header-nav">
      <Link>
              <div className="header-option">
                <span className="header-optionLineTwo"><i className="bi bi-translate"></i></span>
                <span className="header-optionLineOne">Language
                <ul className="lang-list">
                  <li dir="rtl">العربية -AR {false && <i className="bi bi-check"></i>}</li>
                  <li >English -En <i className="bi bi-check"></i></li>
                  <li>עברית -KO {false && <i className="bi bi-check"></i>}</li>
                  <li>español -ES {false && <i className="bi bi-check"></i>}</li>
                </ul>
                
                
                </span>
                
              </div>
            </Link>
        {user && (
          <>
         
            <Link to="/home">
              <div className="header-option">
                <span className="header-optionLineOne">Hello {user.email}</span>
                <span
                  className="header-optionLineTwo"
                  onClick={(e) => {
                    e.preventDefault();
                    const auth = getAuth();
                    signOut(auth)
                      .then(() => {
                        // Sign-out successful.
                      })
                      .catch((error) => {
                        // An error happened.
                      });
                  }}
                >
                  Logout
                </span>
              </div>
            </Link>
          </>
        )}
        {!user && (
          <>
            <Link to="/login">
              <div className="header-option">
                <span className="header-optionLineOne">Hello Guest</span>
                <span className="header-optionLineTwo">"Sign In"</span>
              </div>
            </Link>
          </>
        )}
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <i className="bi bi-cart4" style={{ fontSize: "24px" }}></i>
            <span
              className="header-optionLineTwo header-basketCount"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              4
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
