import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import photo from "./img/ElizavetaCV.jpg";
import TypedName from "./Name";
import LinkedIn from "./img/linkedin.png";
import Github from "./img/github.png";
import Download from "./img/cv.png";
import Moncv from "./img/CV_Elizaveta_Patrusheva.pdf";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav vertical className="mynavbar">
          <div className="monbloc">
            <NavItem className="navbarPhoto">
              <img src={photo} alt="CV Elizaveta Patrusheva" />
            </NavItem>
            <NavItem className="navbarPhoto">
              <TypedName />
              <p className="navDescription">
                Développeuse Front End junior
                <br />
                Débutante mais motivée
              </p>
            </NavItem>
          </div>

          <NavItem className="logosSocial">
            <NavLink
              className="itemLogoSocial"
              href="https://www.linkedin.com/in/elizaveta-patrusheva/"
              target="_blank"
            >
              <img src={LinkedIn} alt="Icone LinkedIn" />
            </NavLink>
            <NavLink
              className="itemLogoSocial"
              href="https://github.com/LisaPa1"
              target="_blank"
            >
              <img src={Github} alt="Icone Github" />
            </NavLink>
            <NavLink className="itemLogoSocial" href={Moncv} target="_blank">
              <img src={Download} alt="Icone Download" />
            </NavLink>
          </NavItem>
          <NavItem className="contacts">
            <p>
              07 82 08 48 08
              <br />
              elizaveta.np@gmail.com
            </p>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
