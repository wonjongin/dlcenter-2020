import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./common/header";
import { Route } from "react-router";
import { Home, About, Product, List } from "./pages";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
      <Route path="/list" component={List} />
    </div>
  );
}

export default App;
