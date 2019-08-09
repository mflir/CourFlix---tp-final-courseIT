import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import Header from "./components/Header";


class App extends React.Component {

  render() {
    return (
      <div className="container-app">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default App;
