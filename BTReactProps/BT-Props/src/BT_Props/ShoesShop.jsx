import React, { Component } from "react";
import ShoesList from "./ShoesList";
import data from "./data.json";
import ShoesDetail from "./ShoesDetail";

export default class ShoesShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectProducts: null,
    };
  }
  handleSelectProducts = (product) => {
    console.log(product);
    this.setState({ selectProducts: product });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ShoesShop</h1>
        <ShoesList products={data} onSelect={this.handleSelectProducts} />
        <ShoesDetail product={this.state.selectProducts} />
      </div>
    );
  }
}
