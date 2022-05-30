import React from "react";

export default function ShoesItem(props) {
  const { product } = props;
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="card-img "
        width="100%"
        height="400px"
      />
      <div className="card-body">
        <h3 className="card-tittle">{product.name}</h3>
        <p className="card-text">{product.price} $</p>
      </div>
    </div>
  );
}
