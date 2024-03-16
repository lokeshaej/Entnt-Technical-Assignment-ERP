import React, { useState, useEffect } from "react";
import { mockOrders as initialOrders } from "./mockData"; // Assuming mockOrders is exported from mockData.js
import "./CalendarView.css"; // Import CSS file for styling
import Header from "./Header";
import Footer from "./Footer";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [ordersForSelectedDate, setOrdersForSelectedDate] = useState([]);
  const [mockOrders, setMockOrders] = useState(initialOrders); // State variable for orders
  const [selectedOrder, setSelectedOrder] = useState(null); // State variable for selected order details

  useEffect(() => {
    generateExpectedDeliveryDates();
  }, []);

  const generateExpectedDeliveryDates = () => {
    const updatedOrders = initialOrders.map((order) => {
      const orderDate = new Date(order.orderDate);
      const deliveryDate = new Date(orderDate);
      deliveryDate.setDate(
        deliveryDate.getDate() + Math.floor(Math.random() * 7)
      );
      order.expectedDelivery = deliveryDate.toISOString().split("T")[0];
      order.orderDate = orderDate.toISOString().split("T")[0];
      return order;
    });
    console.log("Updated orders with expected delivery dates:", updatedOrders);
    setMockOrders(updatedOrders); // Update mockOrders state
  };

  const handleDateClick = (date) => {
    const ordersOnDate = mockOrders.filter(
      (order) => order.expectedDelivery === date
    );
    setSelectedDate(date);
    setOrdersForSelectedDate(ordersOnDate);
    setSelectedOrder(null); // Reset selected order details
  };

  const handleViewDetails = (orderId) => {
    const order = mockOrders.find((order) => order.id === orderId);
    setSelectedOrder(order);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = mockOrders.filter((order) => order.id !== orderId);
    console.log("Deleted order with ID:", orderId);
    console.log("Updated orders:", updatedOrders);
    setMockOrders(updatedOrders); // Update mockOrders state after deletion
    setSelectedOrder(null); // Reset selected order details
    // Update ordersForSelectedDate to reflect the changes
    const ordersOnDate = updatedOrders.filter(
      (order) => order.expectedDelivery === selectedDate
    );
    setOrdersForSelectedDate(ordersOnDate);
  };

  const renderCalendar = () => {
    const calendarDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date.toISOString().split("T")[0];
    });

    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Orders</th>
            <th>Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {calendarDates.map((date) => (
            <tr key={date} onClick={() => handleDateClick(date)}>
              <td>{date}</td>
              <td>{countOrdersForDate(date)}</td>
              <td>{renderDeliveryDate(date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const countOrdersForDate = (date) => {
    return mockOrders.filter((order) => order.expectedDelivery === date).length;
  };

  const renderDeliveryDate = (date) => {
    const ordersOnDate = mockOrders.filter(
      (order) => order.expectedDelivery === date
    );
    return ordersOnDate.map((order) => (
      <div key={order.id}>
        <div>Order Date: {order.orderDate}</div>
        <div>
          Expected Delivery:{" "}
          {order.status === "Delivered"
            ? order.orderDate
            : order.expectedDelivery}
        </div>
      </div>
    ));
  };

  const renderOrderDetails = () => {
    if (selectedOrder) {
      return (
        <div>
          <h3>Order Details</h3>
          <p>Customer Name: {selectedOrder.customerName}</p>
          <p>Status: {selectedOrder.status}</p>
          <button onClick={() => setSelectedOrder(null)}>Close Details</button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Header/>
      <h2>Calendar View</h2>
      <p>Select a date to view orders due for delivery:</p>
      {renderCalendar()}
      {selectedDate && (
        <div>
          <h3>Orders Due for Delivery on {selectedDate}:</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ordersForSelectedDate.map((order) => (
                <tr key={order.id}>
                  <td>{order.customerName}</td>
                  <td>{order.status}</td>
                  <td>
                    <button onClick={() => handleViewDetails(order.id)}>
                      View Details
                    </button><br/>
                    <button onClick={() => handleDeleteOrder(order.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {renderOrderDetails()}
      <div className="Foot">
     <Footer/></div>
    </div>
  );
};

export default CalendarView;
