import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Navbar />
    <Header />
    <App />
    <Footer />
  </div>
);
