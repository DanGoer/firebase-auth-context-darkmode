import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utility/AuthContextProvider";
import { ThemeProvider } from "./darkmode/ThemeContext";
import Background from "./darkmode/BackGround";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
