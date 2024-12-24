import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./assets/Create";
import Read from "./assets/Read";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
