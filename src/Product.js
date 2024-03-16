import React from "react";

const Products = ({
  Productkx,
  addToCart,
  buyNow,
  handleEdit,
  handleDelete,
}) => {
  const { id, name, price, discount, stockQuantity, image } = Productkx;

  const handleAddToCart = () => {
    addToCart(Productkx);
  };

  const handleBuyNow = () => {
    buyNow(Productkx);
  };

  const handleEditClick = () => {
    // Implement edit functionality
    const updatedProduct = { ...Productkx, name: "Updated Product Name" }; // Example: Updating the product name
    handleEdit(updatedProduct);
  };

  const handleDeleteClick = () => {
    // Implement delete functionality
    handleDelete(id);
  };

  return (
    <div className="product-box">
      <img src={image||} alt={name} className="product-image" />
      <div className="product-details">
        <h6>{name || "Unknown"}</h6>
        <br /> {/* Line break for space */}
        <h6>Ratings: {Productkx.ratings || "N/A"}</h6>
        <br /> {/* Line break for space */}
        <h6>Price: {price || "N/A"}</h6>
        <br /> {/* Line break for space */}
        <h6>Discount: {discount || "N/A"}</h6>
        <br /> {/* Line break for space */}
        <h6>Stock left: {stockQuantity || "N/A"}</h6>
        <div className="buttons">
          {stockQuantity > 0 ? (
            <>
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={handleBuyNow}>Buy Now</button>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleDeleteClick}>Delete</button>
            </>
          ) : (
            <button disabled>Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
