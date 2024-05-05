import React from "react";
import logo from "../../assets/images/shopperlogo.png";
import profile from "../../assets/images/avtar.png";
import "./HeaderComponent.css";
import { clearCart } from "../../store/CartSlice";
import mobiles from "../../assets/images/mobile.png";
import laptops from "../../assets/images/laptops.png";
import women from "../../assets/images/women-cloth.png";
import mens from "../../assets/images/Mens-cloth.png";
import furniture from "../../assets/images/furniture.png";
import decoration from "../../assets/images/home-decoration.png";
import Shoes from "../../assets/images/trainers.png";
import light from "../../assets/images/light.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const HeaderComponent = () => {
  const items = useSelector((state) => state.allCart.cart);
  const isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
  const customer = JSON.parse(sessionStorage.getItem("customerInfo"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropShow, setDropShow] = useState(false);

  const logOutClick = () => {
    sessionStorage.removeItem("customerInfo");
    sessionStorage.setItem("isLoggedIn", false);
    dispatch(clearCart());
    localStorage.removeItem("cart");
    navigate("/");
  };

  const navLogin = () => {
    navigate("/login");
  };

  const profileClick = () => {
    navigate("/profile");
  };

  const navtoWishlist = () => {
    navigate("/wishlist");
  };

  const profileOver = () => {
    setDropShow(true);
  };
  const profileOut = () => {
    setDropShow(false);
  };

  const cartClick = () => {
    navigate("/cartItem");
  };

  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="" width="40" height="40" />
          <b>Shopper</b>
        </div>
        <div>
          <nav>
            <span className="active">
              <Link to="home">Home</Link>
            </span>
            <span className="active">
              <Link to="products">Products</Link>
            </span>
            <span className="active">
              <Link to="shop">Shop</Link>
            </span>
            <span className="active">
              <Link to="about">About</Link>
            </span>
            <span className="active">
              <Link to="contact">Contact</Link>
            </span>
          </nav>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            {isLoggedIn ? (
              <div onMouseOver={profileOver} id="dropdown-parent">
                <img
                  src={profile}
                  alt="person"
                  width="28"
                  height="28"
                  className="mb-2 me-2"
                />
                &nbsp;
                {customer[0].first}
                {dropShow ? (
                  <ul onMouseOut={profileOut} className="dropdown-child">
                    <li onClick={profileClick}>
                      <span className="fa-solid fa-circle-user me-2"></span>
                      {customer[0]?.first}
                    </li>
                    <li onClick={navtoWishlist}>
                      <span className="fa-solid fa-heart me-2"></span>
                      My Wishlist
                    </li>
                    <li onClick={() => logOutClick()}>
                      <span className="fa-solid fa-toggle-on me-2"></span>
                      Log Out
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div
                onClick={() => navLogin()}
                className="fa-solid fa-circle-user fs-5"
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                title="login"
              ></div>
            )}
          </div>

          <span className="position-relative" style={{ cursor: "pointer" }}>
            <span onClick={cartClick} className="ms-2">
              <i className="fa-solid fa-cart-shopping" id="cartBox"></i>
              {items.length == 0 ? (
                ""
              ) : (
                <span className="badge rounded-pill bg-danger position-absolute">
                  {items.length}
                </span>
              )}
            </span>
          </span>
        </div>
      </header>

      <div id="mobile-navbar"></div>
      <div id="categories-img">
        <div style={{ position: "relative" }} className="category-container">
          <img src={mobiles} alt="" />
          <div
            style={{ position: "absolute", left: "-10px", marginTop: "5px" }}
          >
            <Link to="catagories/smartphones" id="link">
              SmartPhones
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }} className="category-container">
          <img src={laptops} alt="" />
          <div style={{ position: "absolute", marginTop: "5px" }}>
            <Link to="catagories/laptops" id="link">
              laptops
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }} className="category-container">
          <img src={women} alt="" />
          <div style={{ position: "absolute", marginTop: "5px" }}>
            <Link to="catagories/Women Clothing" id="link">
              Womens
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }} className="category-container">
          <img src={mens} alt="" />
          <div style={{ position: "absolute", left: "25px", marginTop: "5px" }}>
            <Link to="catagories/Mens Clothing" id="link">
              Mens
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }} className="category-container">
          <img src={decoration} alt="" />
          <div style={{ position: "absolute", left: "-1px", marginTop: "5px" }}>
            <Link to="catagories/Home Decoration" id="link">
              Decoration
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }} className="category-container">
          <img src={furniture} alt="" />
          <div style={{ position: "absolute", marginTop: "5px" }}>
            <Link to="catagories/Furniture" id="link">
              Furniture
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }} className="category-container">
          <img src={Shoes} alt="" />
          <div style={{ position: "absolute", left: "22px", marginTop: "5px" }}>
            <Link to="catagories/Mens Shoes" id="link">
              Shoes
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }} className="category-container">
          <img src={light} alt="" />
          <div style={{ position: "absolute", left: "15px", marginTop: "5px" }}>
            <Link to="catagories/Lights" id="link">
              Lighting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
