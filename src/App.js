import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Shared/Home";
import AppBar from "./Shared/AppBar";

import RentPaymentListing from "./Components/Pages/Py/Payments/RentPaymentListing";
import Complaints from "./Components/Pages/Py/Payments/Complaints";
import NoticeBoard from "./Components/Pages/Py/Payments/NoticeBoard";
import TenantDetails from "./Components/Pages/Py/Payments/TenantsDetails";
import ElectricityBill from "./Components/Pages/Py/Payments/ElectricityBill";

function App() {
  return (
    <>
    
      <BrowserRouter>
    <AppBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentPaymentList" element={<RentPaymentListing/>} />
          <Route path="/complaints" element={<Complaints/>} />
          <Route path="/noticeBoard" element={<NoticeBoard/>} />
          <Route path="/tenantsDetails" element={<TenantDetails/>} />
          <Route path="/electricityBill" element={<ElectricityBill/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
