import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "../../store/store";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import HomeComponent from "../HomeComponent/HomeComponent";
import SignUpComponent from "../SignUpComponent/SignUpComponent";
import SignInComponent from "../SignInComponent/SignInComponent";

const IndexComponent = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="/" element={<HomeComponent />}></Route>
            <Route path="/register" element={<SignUpComponent />}></Route>
            <Route path="/login" element={<SignInComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default IndexComponent;
