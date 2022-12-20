import React from "react";
import "./App.css"
import {originals, action, horror, comedy, romance} from './urls'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netfilx Orginals"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horror} title="Horror" />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" />
    </div>
  );
}

export default App;
