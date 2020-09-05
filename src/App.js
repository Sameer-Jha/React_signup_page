import React, { useState } from "react";
import "./App.css";

// Importing components
import Header from "./components/header";
import Login from "./components/login";
import Hero from "./components/hero";

function App() {
  let [login, setLogin] = useState(false);
  if (login) {
    return (
      <div className="App">
        <Header />
        <Hero />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <Login setLogin={setLogin} />
      </div>
    );
  }
}

export default App;
