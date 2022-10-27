import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OfferedCourse = ({ details }) => {
  const { id, name, discount, price } = details;
  const discountPercent = parseInt(discount.slice(0, 2));
  const discountPrice = price - (price * discountPercent) / 100;
  return (
    <div className="card my-3 bg-primary text-light">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
          price : <s>{price} TK</s>
        </p>
        <p>
          Discount price : <b className=" shadow">{discountPrice} TK</b>
        </p>
      </div>
      <Link to={`/checkout/${id}`} class="mx-auto mb-3">
        <Button variant="warning">Get Premium Access</Button>
      </Link>
    </div>
  );
};

export default OfferedCourse;
