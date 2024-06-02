import React from "react";
import { PRODUCTS } from "../../data/products";
import Product from "./product";

export const Shop = () => {
  return (
    <React.Fragment>
      <h1>Shop</h1>
      <div className="row">
        {PRODUCTS.map((productData) => {
          return <Product key={productData.id} data={productData} />;
        })}
      </div>
    </React.Fragment>
  );
};
