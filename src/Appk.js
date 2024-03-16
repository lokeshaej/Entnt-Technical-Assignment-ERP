import React, { useState, useEffect } from "react";
import ProductManagement from "./ProductManagement"; // Assuming ProductManagement imports and manages products
import Header from "./Header";
import Footer from "./Footer";

function Appk() {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [productStock, setProductStock] = useState({}); // State to store product stock

  const handleAddToCart = (product) => {
    // Update the quantity of the existing item or add a new item
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });

    // Update stock quantity in state (assuming ProductManagement manages stock)
    setProductStock({
      ...productStock,
      [product.id]: (productStock[product.id] || 0) - 1, // Handle initial stock value
    });
  };

  // Calculate the total price of cart items
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Remove an item from the cart
  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    // Update stock quantity (assuming ProductManagement manages stock)
    setProductStock({
      ...productStock,
      [productId]: (productStock[productId] || 0) + 1,
    });
  };

  return (
    <div className="App">
      <Header/>
      <ProductManagement
        addToCart={handleAddToCart}
        productStock={productStock}
      />
      {/* Conditionally render cart items in a table */}
      {cartItems.length > 0 && (
        <div className="cart-items">
          <h4>Cart Items</h4>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Display total price */}
          <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Appk;
