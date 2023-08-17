import React from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/reducer/cart";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-secondary App ">
      <h2 className="text-center">Parthi's Zone</h2>
      <div className="row justify-content-center pt-2">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex pb-1 ">
          <button
            className="btn btn-success me-4"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <input
            type="search box"
            placeholder="Search your product"
            className="form-control"
          />
          <button
            className="btn btn-success ms-3"
            onClick={(key = addItem) => navigate("/cart")}
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
