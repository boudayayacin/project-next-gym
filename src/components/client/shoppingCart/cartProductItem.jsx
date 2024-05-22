"use client";
import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useShoppingCart } from "use-shopping-cart";

const CartProductItem = ({ product }) => {
  const { addItem } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = (product) => {
    const target = {
      id: product._id,
      title: product.designation,
      image: product.imageart,
      price: product.prix
    };
    addItem(target, { count: quantity }).then(() => {
      console.log('Item added to cart:', target);
      setQuantity(1);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={product?.imageart}
          className="card-img-top p-3"
          alt={product?.designation || "Product image"}
          style={{ height: '400px', width: '400px' , objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h2 className="card-title">{product?.designation ? `${product.designation.substr(0, 20)} ...` : "No designation"} </h2>
          <p className="card-text">Prix: {product?.prix ? `${product.prix} TND` : "Price not available"}</p>
          <div className="d-flex justify-content-center mb-2">
            <Rating style={{ maxWidth: 100 }} value={5} />
          </div>
          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn-secondary me-2" onClick={decreaseQuantity}>-</button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-secondary ms-2" onClick={increaseQuantity}>+</button>
          </div>
          <button className="btn btn-warning" disabled={product.qtestock <= 1} onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;