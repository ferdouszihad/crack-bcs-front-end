import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const {
    discount,
    id,
    name,
    price,
    shortDetail,
    img,
    distribution,
    discount_status,
  } = useLoaderData();
  const discountpercent = parseInt(discount.slice(0, 2));
  const discountPrice = price - (price * discountpercent) / 100;
  console.log(useLoaderData());
  return (
    <div className="container my-5 ">
      <div className="name text-center my-5">
        <h5>Couse Name </h5>
        <h1>{name}</h1>
      </div>
      <div className="detail-body d-flex flex-wrap flex-md-nowrap align-items-center gap-4">
        <div className="course-img my-5">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="course-detail">
          <h4>details about the course</h4>
          <p>{shortDetail}</p>
          <hr />
          <p>Total Training Hour : {distribution.slice(0, 2)} Hour</p>
          <div className="fw-bold my-3">
            {discount_status ? (
              <>
                <p>
                  price : <s>{price} TK</s>
                </p>
                <p>
                  Discount price : <b>{discountPrice} TK</b>
                </p>
              </>
            ) : (
              <> price : {price} TK</>
            )}
          </div>

          <Link to={`/checkout/${id}`} class="mx-auto mb-3">
            <Button variant="warning">Get Premium Access</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
