import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
// import Payment from "./Pages/Payment";
// import Profile from "./Pages/Profile";
import Class from "./Pages/Class";
// import Purchases from "./Pages/Purchases";
import Profile from "./Pages/Profile";
// import Class from "./Pages/Class";
// import Purchases from "./Pages/Purchases";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} /> */}
          <Route path="/class" element={<Class />} />
          {/* <Route path="/purchases" element={<Purchases />} /> */}
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/class" element={<Class />} />
          <Route path="/purchases" element={<Purchases />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
