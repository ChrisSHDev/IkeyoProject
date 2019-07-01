import React, { Component } from "react";
import Logo from "../assets/logo/logo.png";
import Insta from "../assets/icon/SVG/Icon-instagram.svg";
import Facebook from "../assets/icon/SVG/Icon-facebook.svg";
import { Link } from "react-router-dom";
import Twit from "../assets/icon/SVG/Icon-twitter.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__myfooter">
          <div className="footer__myfooter--logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <h1 className="footer__myfooter--title">Get In Touch</h1>
          <div className="footer__myfooter--images">
            <a href="https://www.instagram.com/explore/tags/homedecor/">
              <img src={Insta} alt="insta" />
            </a>
            <a href="https://www.facebook.com/kndesigny/">
              <img src={Facebook} alt="face" />
            </a>
            <a href="https://twitter.com/">
              <img src={Twit} alt="twit" />
            </a>
          </div>
        </div>

        <div className="footer__text">
          <div className="footer__text--left">
            <div id="thick">
              Richard Rovner
              <br />
              The Bees Knees Management
            </div>
            <div id="slim">
              460 King Street West
              <br />
              Toronto, Ontario M5V 1L7
            </div>
            <div id="slim">
              <a href="mailto:info@thebeesknees.com"> info@thebeesknees.com</a>
            </div>
          </div>
          <div className="footer__text--mid">
            <div id="thick">
              Marsha Vlasic
              <br />
              Artist Group International
            </div>
            <div id="slim">
              Booking Agent for
              <br />
              US / South America / Japan
            </div>
            <div id="slim">
              <a href="mailto:marsha.vlasic@artistgrp.com">
                marsha.vlasic@artistgrp.com
              </a>
            </div>
          </div>

          <div className="footer__text--right">
            <div id="thick">
              Russel Warby
              <br />
              William Morrir Entertainment
            </div>
            <div id="slim">
              Booking Agent for
              <br />
              UK / EU / AU
            </div>
            <div id="slim">
              <a href="mailto:RLW@wmeentertainment.com">
                RLW@wmeentertainment.com
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright The Bees Knees © 2018 All Rights Reserved
        </div>
      </footer>
    );
  }
}
