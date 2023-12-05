import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./productCard.css";

const ProductCard = ({ product, openModal }) => {
  const { price, title, image } = product;

  return (
    <div
      className="card p-2 border-0 card-hover"
      style={{ height: "450px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={`${title} (noimage)`}
        style={{
          minHeight: "250px",
          objectFit: "contain",
          width: "100%",
        }}
      />
      <div className="card-body">
        <h5 className="card-title overflow-elipsis" style={{ height: "50px" }}>
          {title}
        </h5>

        <p className="card-text text-secondary-emphasis text-center fw-bolder mb-0">{`${price} $`}</p>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => openModal(product)}
        >
          Show More
        </button>
        <button
          type="button"
          className="btn btn-info mx-auto w-100 d-flex align-items-center justify-content-center gap-2 "
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
