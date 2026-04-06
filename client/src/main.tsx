import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Loader from "./components/feedback/Loader";
import ToastProvider from "./components/feedback/ToastProvider";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <App />
      </React.Suspense>
      <ToastProvider />
    </BrowserRouter>
  </React.StrictMode>
);
