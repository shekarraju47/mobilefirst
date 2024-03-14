import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Protected from "./components/Protected/Protected";
import Notfound from "./components/notFound/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Protected}>
          <Route path="/mobilefirst" element={<Home />} />
        </Route>
        <Route path="/mobilefirst/login" element={<Login />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
