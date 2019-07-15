import React from "react";
import '/index.css'
import logo from "./"

class NavBar extends React.Component {

  render() {
    return (
      <div className="container-navbar">
        <img className="logo" src={logo} alt="" />
        <ul>
          <li>Inicio</li>
          <li>Series</li>
          <li>Peliculas</li>
          <li>Agregados recientemente</li>
          <li>Mi lista</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;