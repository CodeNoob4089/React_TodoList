import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/main";
import Sub from "../components/sub";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sub/:id" element={<Sub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
