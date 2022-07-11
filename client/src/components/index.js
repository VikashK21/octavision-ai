import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from "./Customer";
import Home from "./Home";

function Page() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Page;
