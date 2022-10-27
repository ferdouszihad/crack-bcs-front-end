import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { name, img } = useLoaderData();
  return (
    <div>
      <div className="container">
        <h2 class="bg-primary py-5 my-5 rounded-5 text-center text-light">
          Congrates!! You Get Premium access
        </h2>
        <div className="premium-box d-flex text-start">
          <div className="user-details">
            <h4 className="fs-lg">
              Hello{" "}
              <span className="text-primary">
                {user.displayName ? user.displayName : user.email}
              </span>
              ,
            </h4>
            <h5 className="fs-large">
              Thank you for Ordering the Course. Our Customer Service will give
              you the course as soon as possible. <br /> <br />
              Team <span className="text-danger">Crack BCS </span>
            </h5>
          </div>
          <div className="course">
            <div className="course-image">
              <img src={img} alt="" className="img-fluid w-25" />
            </div>
            <div className="h2">{name}</div>
          </div>
        </div>{" "}
        <Link to="/courses" className=" my-5">
          <button className="btn btn-outline-primary">Back to Course</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
