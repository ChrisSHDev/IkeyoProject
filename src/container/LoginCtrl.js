import React, { Component } from "react";
import Login from "../assets/images/profile.png";

const LoginCtrl = ({ show, onClose }) => {
  {
    if (!show) {
      return null;
    }

    return (
      <div className="loginCtrl">
        <div className="loginCtrl__text">
          <img id="login" src={Login} alt="login" />
          <h3>ROSA KANG</h3>
          <button
            onClick={event => {
              onClose();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
};
export default LoginCtrl;
