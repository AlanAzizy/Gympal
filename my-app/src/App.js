import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auth from "./Pages/Auth";
// import Payment from "./Pages/Payment";
// import Profile from "./Pages/Profile";
import Class from "./Pages/Class";
// import Purchases from "./Pages/Purchases";
import Profile from "./Pages/Profile";
// import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Purchases from "./Pages/Purchases";
// import Profile from "./Pages/Profile";
// import Class from "./Pages/Class";
// import Purchases from "./Pages/Purchases";
import PaymentAdmin from "./Pages/PaymentAdmin";
import ProtectedRoute from "./Pages/ProtectedRoute";



function App() {

  const role = localStorage.getItem('pengguna') ? JSON.parse(localStorage.getItem('pengguna')).role : 'user';

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} /> */}

          <Route path="/class" element={<ProtectedRoute ><Class /></ProtectedRoute>} />
          {/* <Route path="/purchases" element={<Purchases />} /> */}
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<ProtectedRoute ><Profile /></ProtectedRoute>} />
          {/* <Route path="/payment" element={<Payment />} />
          <Route path="/class" element={<Class />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          {/* <Route path="/class" element={<Class />} >*/}
          <Route path="/purchases" element={<ProtectedRoute><Purchases /></ProtectedRoute>} /> 
          {<Route path="/admin" element={<ProtectedRoute>{role=='admin' ? <PaymentAdmin/> : <Profile/>}</ProtectedRoute>}/>}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
