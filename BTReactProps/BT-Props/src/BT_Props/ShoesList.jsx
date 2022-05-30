import React from "react";
import ShoesItem from "./ShoesItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ShoesList(props) {
  const { products, onSelect } = props;

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4 mb-3">
            <ShoesItem product={product} />
            <button className="btn btn-dark  text-light ">
              Add to Carts <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button className="btn btn-info " onClick={() => onSelect(product)}>
              Detail
            </button>
          </div>
        );
      })}
    </div>
  );
}
