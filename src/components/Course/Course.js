import React from "react";
import { Link } from "react-router-dom";

const Course = ({ details }) => {
  const { id, name, img, price } = details;
  return (
    <div className="col ">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body px-3 py-4 ">
          <h5 className="card-title mt-2 mb-4">{name}</h5>
          <p>price : {price} BDT</p>
          <Link href="#" className="btn btn-success">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
