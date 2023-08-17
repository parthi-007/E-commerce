import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../Data/ProductList";
export default function Product() {
  const params = useParams();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );
  const addToCart = () => {
    alert("Product added to the cart...");
  };
  const OutOfStock = () => {
    prompt("please select how many quantity do you want");
  };
  const BuyNow = () => {
    alert('Order placed successfully')
  }

  return (
    <div className=" card m-2 justify-content-center d-flex flex-column align-items-center mt-2 ">
      <div className="mt-3 ms-7">
        <img
          src={props.thumbnail}
          height={300}
          width={350}
          alt={props.title}
          className="mt-3"
          style={{ borderRadius: 25 }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="m-2">Price{`$${props.price}`}</h6>
        <h6 className="m-2">Discount {props.discountPercentage}%</h6>
        <h6 className="m-2">Rating {props.rating}</h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <>
              <button className="btn btn-success " onClick={BuyNow}>Buy now</button>
              <button className="btn btn-success ms-3" onClick={addToCart}>
                Add to cart
              </button>
            </>
          ) : (
            <button className="btn btn-outline-danger" onClick={OutOfStock}>
              Out of stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
