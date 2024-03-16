import React from "react";
import { Space, Typography } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import Appk from "./Appk";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { mockCustomers, mockOrders, productsall } from "./mockData";

import { Card, Statistic, Table } from "antd";
import "./Dashboard.css";

// Assuming Card component is defined somewhere else

const Dashboard = () => {
  const totalCustomers = mockCustomers.length;
  const totalOrders = mockOrders.length;
  const totalProducts = productsall.length;

  const totalStock = productsall.reduce(
    (acc, product) => acc + product.stockQuantity,
    0
  );
  const totalRevenue = productsall.reduce((acc, order) => acc + order.price, 0);

  const productNames = productsall.map((product) => product.name);
  const stockQuantities = productsall.map((product) => product.stockQuantity);

  const options = {
    scales: {
      x: {
        type: "category",
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  const stockData = {
    labels: productNames,
    datasets: [
      {
        label: "Stock Quantity",
        data: stockQuantities,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
        <>
    <Header/>
    </>
      <center>
        <h1>Dashboard Summary</h1>
      </center>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}></Typography.Title>
        <Space direction="horizontal">
          <DashCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "red",
                  borderRadius: 30,
                  fontSize: 24,
                  padding: 8,
                  textAlign: "center",
                  fontWeight: 34,
                }}
              />
            }
            title={"Total Orders"}
            value={totalOrders}
          />
          <DashCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "blue",
                  backgroundColor: "orange",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  textAlign: "center",
                }}
              />
            }
            title={"Total Products"}
            value={totalProducts}
          />
          <DashCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "yellow",
                  backgroundColor: "green",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  textAlign: "center",
                }}
              />
            }
            title={"Total Stocks"}
            value={totalStock}
          />
          <DashCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  backgroundColor: "yellow",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                  textAlign: "center",
                }}
              />
            }
            title={"Customer"}
            value={totalCustomers}
          />
          <DashCard
            icon={
              <DollarCircleOutlined
                style={{
                  textAlign: "center",
                  color: "red",
                  backgroundColor: "black",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Total Price"}
            value={totalRevenue}
          />
        </Space>
      </Space>

      <div>{/* Assuming 'revenue' property in mockOrders */}</div>

      <div className="customer-list">
        <center>
          <h2>Customer List</h2>
        </center>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.Gender}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <>
    <Footer/>
    </>
      </div>
      
    </div>
    
  );
};
function DashCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
export default Dashboard;
