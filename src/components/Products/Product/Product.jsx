import React from "react";

const Product = () => {
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button">Product add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">product  incre item cart count</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">product  decre item cart count</button>
        <button data-cy="product-remove-cart-item-button">product prduct remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
