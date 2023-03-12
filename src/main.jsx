import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { HOME } from "./pages/HOME/HOME";
import { DESTINATION } from "./pages/DESTINATION/DESTINATION";
import { CREW } from "./pages/CREW/CREW";
import { TECHNOLOGY } from "./pages/TECHNOLOGY/TECHNOLOGY";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HOME />} />
          <Route path="/destination" element={<DESTINATION />} />
          <Route path="/crew" element={<CREW />} />
          <Route path="/technology" element={<TECHNOLOGY />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
