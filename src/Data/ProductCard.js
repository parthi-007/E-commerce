import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ productData }) {
  const navigate = useNavigate();
  return (
    <div
      className=" card m-2 cursor-pointer justify-content-center justify-content-center d-flex flex-column align-items-center"
      style={{ width: 300 }}
      role="button"
      onClick={() => navigate(`/Product/${productData.id}`)}
    >
      <div className="mt-3">
        <img
          src={productData.thumbnail}
          height={150}
          width={180}
          alt={productData.title}
          className=""
          style={{ borderRadius: 25 }}
        />
      </div>
      <div className="card-body mt-2">
        <h5 className="card-titie">{productData.title}</h5>
        <h6 className="m-2">Price ${productData.price}</h6>
        <h6 className="m-2">Discount {productData.discountPercentage}%</h6>
        <h6 className="m-2">Rating {productData.rating}</h6>
        <div className="mt-3">
          {productData.stock > 0 && productData.stock > 60 ? (
            <button className="btn btn-success ">Available</button>
          ) : productData.stock < 60 ? (
            <button className="btn btn-outline-danger">Soon</button>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
