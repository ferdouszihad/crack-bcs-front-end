import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { name, img } = useLoaderData();
  return (
    <div>
      <div className="container">
        <h2 class="bg-primary py-5 my-5 rounded-5 text-center text-light">
          Want to be premium?
        </h2>
        <div className="course">
          <div className="course-image">
            <img src={img} alt="" className="img-fluid w-25" />
          </div>
          <div className="h2">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
