import React from "react";


class Header extends React.Component {

  render() {
    return (
      <div className="container-header">
        <h3>Original de Courflix</h3>
        <h1>Black Summer</h1>
        <div className="button-container">
          <button className="button-play">
            <img src="" alt="" />
            <p>Reproducir</p>
          </button>
          <button className="button-play">
            <img src="" alt="" />
            <p>Mi lista</p>
          </button>
        </div>
        <div>Ver la temporada 1</div>
        <div className="descripcion">
          Una ansiada luna de miel. Un asesinato terrible. Varios sospechosos. Si sobreviven, serán unas vacaciones de ensueño.
        </div>
      </div>
    );
  }
}

export default Header;