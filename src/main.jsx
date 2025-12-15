import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/global.css";

AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
