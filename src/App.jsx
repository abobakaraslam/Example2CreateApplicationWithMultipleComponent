// File: App.jsx located in root-directory
import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Diary from "./component/Diary";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Login />
      <Register />
      <Diary />
    </div>
  );
}

export default App;
