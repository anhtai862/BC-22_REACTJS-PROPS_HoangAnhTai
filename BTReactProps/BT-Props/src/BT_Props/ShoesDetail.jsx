import React from "react";

export default function ShoesDetail(props) {
  const { product } = props;
  if (!product) {
    return null;
  }
  return (
    <div className="row mt-5 ">
      <div className="col-sm-4">
        <h1>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          height="400px"
          width="100%"
        />
      </div>
      <div className="col-sm-8">
        <h3>Thông Tin Chi Tiết</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Alias</td>
              <td>{product.alias}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{product.price} $</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>Short Description</td>
              <td>{product.shortDescription}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
