import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListProducts } from "./Components/Videos/VideoList";
import { VideoForm } from "./Components/Videos/VideoForm";
import { NavBar } from "./Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

import "bootswatch/dist/pulse/bootstrap.min.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<ListProducts />} />
          <Route path="/new-video" element={<VideoForm />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
