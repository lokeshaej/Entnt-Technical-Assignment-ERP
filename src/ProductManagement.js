import React, { useState, useEffect } from "react";
import Products from "./Products";
import SearchIcon from "./search.svg";
import { productsall as initialProducts } from "./mockData.js"; // Direct import
import "./ProductManagement.css";

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Initial state for search term
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [showAddProductForm, setShowAddProductForm] = useState(false); // State to control visibility of additional properties
  const [productsall, setProductsAll] = useState(initialProducts); // State to manage products

  // Add a state to manage product stock
  const [productStock, setProductStock] = useState(
    productsall.reduce(
      (acc, product) => ({ ...acc, [product.id]: product.stockQuantity }),
      {}
    )
  );

  // State for managing form input
  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    price: "",
    discount: "",
    stockQuantity: "",
    // Add more properties as needed
  });

  useEffect(() => {
    const filterProducts = productsall.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(
      productsall.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, productsall]); // Update products on search term change

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const newProduct = {
    id: productsall.length + 1, // Generate a unique ID for the new product
    ...formData,
  };

  const handleEdit = (updatedProduct) => {
    const updatedProducts = productsall.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProductsAll(updatedProducts);
  };

  const handleDelete = (productId) => {
    const updatedProducts = productsall.filter(
      (product) => product.id !== productId
    );
    setProductsAll(updatedProducts);
  };

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: productsall.length + 1, // Generate a unique ID for the new product
      ...formData,
    };
    // Add the new product to the productsall array
    productsall.push(newProduct);
    // Update filteredProducts state to include the new product
    setFilteredProducts([...filteredProducts, newProduct]);
    setFormData({
      imageUrl: "",
      name: "",
      price: "",
      discount: "",
      stockQuantity: "",
    });
    // Hide additional properties after submission
    setShowAddProductForm(false);
  };

  // Function to toggle visibility of additional properties
  const toggleAddProductForm = () => {
    setShowAddProductForm(!showAddProductForm);
  };

  // Function to handle editing a product

  // Function to handle adding a product to cart
  const handleAddToCart = (product) => {
    // Implement adding to cart logic
    console.log("Adding product to cart:", product);
  };

  // Function to handle buying a product
  const handleBuyNow = (product) => {
    // Implement buy now logic
    console.log("Buying product now:", product);
  };

  return (
    <div className="app">
      <h1>List of Products Available</h1>
      <div className="search">
        <input
          placeholder="Search for Products"
          value={searchTerm}
          onChange={handleSearch}
        />
        <img src={SearchIcon} alt="search" />
      </div>
      {/* Button to toggle visibility of additional properties */}
      <button
        style={{
          marginLeft: "760px",
          fontSize: "20px",
          backgroundColor: "red",
          fontcolor: "white",
        }}
        onClick={toggleAddProductForm}
      >
        {showAddProductForm ? "Hide" : "Add New Product"}
      </button>
      {/* Additional properties form */}
      {showAddProductForm && (
        <form className="new-product-form" onSubmit={handleSubmit}>
          <h2>Add New Product</h2>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount"
            value={formData.discount}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={formData.stockQuantity}
            onChange={handleInputChange}
            required
          />
          {/* Add more input fields for additional properties */}
          <button type="submit">Add Product</button>
        </form>
      )}
      {/* Display filtered products */}
      {filteredProducts.length > 0 ? (
        <div className="container">
          {filteredProducts.map((product) => (
            <Products
              Productkx={{
                ...product,
                image: product.image || product.imageUrl,
              }} // Ensure Productkx has the image property
              key={product.id}
              addToCart={() => handleAddToCart(product)}
              buyNow={() => handleBuyNow(product)}
              handleEdit={handleEdit} // Pass handleEdit function
              handleDelete={handleDelete} // Pass handleDelete function
              productsall={productsall} // Pass productsall as a prop
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Products Found</h2>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
