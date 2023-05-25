import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import ElvishLogo from "../../assets/images/elvishMagicLogo.svg";

const NAV_LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [address, setAddress] = useState("Connect Wallet");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  const closeMenu = () => {
    menuRef.current.classList.remove("active__menu");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="d-flex gap-2 align-items-center">
              <img src={ElvishLogo} alt="" />
            </div>
          </div>

          <div className="nav__menu" ref={menuRef}>
            <ul className="nav__list d-flex align-items-center">
              <span className="close__button" onClick={closeMenu}>
                <i className="ri-close-line"></i>
              </span>

              {NAV_LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    activeClassName="active"
                    onClick={closeMenu}
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-1">
            <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i className="ri-wallet-line"></i>
              </span>
              <Link onClick={() => setAddress("0x1...K4ZnX71")}>{address}</Link>
            </button>

            <button className="btn btn__profile d-flex gap-2 justify-content-center align-items-center">
              <span>
                <Link to={"/register"}>
                  <i className="ri-empathize-line"></i>
                </Link>
              </span>
            </button>

            <span className="mobile__menu">
              <i className="ri-align-right" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
