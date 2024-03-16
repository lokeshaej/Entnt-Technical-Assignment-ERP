import React, { useState } from "react";

const Products = ({
  Productkx,
  addToCart,
  buyNow,
  handleEdit,
  handleDelete,
  oldImageUrl,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...Productkx });

  const handleAddToCart = () => {
    addToCart(Productkx);
  };

  const handleBuyNow = () => {
    buyNow(Productkx);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (!editMode) {
      setEditedProduct({ ...Productkx });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    handleEdit(editedProduct);
    toggleEditMode();
  };

  return (
    <div className="product">
      <img
        src={Productkx.image}
        alt={Productkx.name}
        style={{ width: "200px", height: "200px" }}
      />
      <br />
      <div className="product-details">
        {editMode ? (
          <>
            <h6>Enter name</h6>
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
            />
            <br />
            <h6>Enter Price</h6>
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
            />
            <br />
            <h6>Enter Discount</h6>
            <input
              type="number"
              name="discount"
              value={editedProduct.discount}
              onChange={handleInputChange}
            />
            <br />
            <h6>Enter No of Stocks Available</h6>
            <input
              type="number"
              name="stockQuantity"
              value={editedProduct.stockQuantity}
              onChange={handleInputChange}
            />
            <br />
            <h6>Enter Image URL</h6>
            <input
              type="text"
              name="image"
              value={editedProduct.image}
              onChange={handleInputChange}
            />
          </>
        ) : (
          <>
            <h3>{Productkx.name}</h3>
            <p>Price: ${Productkx.price}</p>
            <p>Discount: {Productkx.discount}%</p>
            <p>In Stock: {Productkx.stockQuantity}</p>
          </>
        )}
        <div className="buttons">
          {editMode ? (
            <>
              <button onClick={handleSaveChanges}>Save</button>
              <button onClick={toggleEditMode}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={handleBuyNow}>Buy Now</button>
            </>
          )}
          <button onClick={() => handleDelete(Productkx.id)}>Delete</button>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
