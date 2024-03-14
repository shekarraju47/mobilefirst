import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Protected from "./components/Protected/Protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Protected}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
