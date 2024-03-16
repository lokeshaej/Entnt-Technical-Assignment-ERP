// App.js
import React from "react";
import Dashboard from "./Dashboard";
import Order from "./order"; // Import the Order component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarView from "./Calender";
import { ContactUs } from "./Contact";
import Appk from "./Appk";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/products" element={<Appk />} />
        <Route path="/orders" element={<Order />} /> {/* Route for Orders */}
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
