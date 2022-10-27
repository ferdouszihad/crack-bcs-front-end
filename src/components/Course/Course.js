import React from "react";
import { Link } from "react-router-dom";

const Course = ({ details }) => {
  const { discount, id, name, img, price, discount_status } = details;
  const discountpercent = parseInt(discount.slice(0, 2));
  const discountPrice = price - (price * discountpercent) / 100;
  return (
    <div className="col ">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body px-3 py-4 ">
          <h5 className="card-title mt-2 mb-4">{name}</h5>
          <p>price : {discount_status ? discountPrice : price} BDT</p>
          <Link to={`/courses/${id}`} className="btn btn-success">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
