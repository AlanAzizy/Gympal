import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import Class from "./Pages/Class";
import Profile from "./Pages/Profile";
import Payment from "./Pages/Payment";
import PaymentAdmin2 from "./Pages/PaymentAdmin2";
import Purchases from "./Pages/Purchases";
import PaymentAdmin from "./Pages/PaymentAdmin";
import {ProtectedRoute, ProtectedRouteAdmin} from "./Pages/ProtectedRoute";
import DaftarKelas from "./Pages/DaftarKelas";
import EditKelas from "./Pages/EditKelas";
import AddKelas from "./Pages/AddKelas";
import Home from "./Components/Home";
import ClassList from "./Pages/ClassList";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/class" element={<ProtectedRoute ><Class /></ProtectedRoute>} />
          <Route path="/myclass" element={<ProtectedRoute ><ClassList /></ProtectedRoute>} />
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<ProtectedRoute >{ <Profile />}</ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute>{ <Payment />}</ProtectedRoute>} />
          <Route path="/purchases" element={<ProtectedRoute>{ <Purchases />}</ProtectedRoute>} /> 
          {<Route path="/adminmembership" element={<ProtectedRouteAdmin>{ <PaymentAdmin/>}</ProtectedRouteAdmin>}/>}
          {<Route path="/adminpayment" element={<ProtectedRouteAdmin>{ <PaymentAdmin2/>}</ProtectedRouteAdmin>}/>}
          {<Route path="/adminkelas" element={<ProtectedRouteAdmin>{ <DaftarKelas/>}</ProtectedRouteAdmin>}/>}
          {<Route path="/admineditkelas" element={<ProtectedRouteAdmin>{ <EditKelas/>}</ProtectedRouteAdmin>}/>}
          {<Route path="/adminaddkelas" element={<ProtectedRouteAdmin>{ <AddKelas/>}</ProtectedRouteAdmin>}/>}
          {<Route path="/adminhome" element={<ProtectedRouteAdmin>{ <Home/>}</ProtectedRouteAdmin>}/>}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
