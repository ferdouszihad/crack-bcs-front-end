import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import OfferedCourse from "../OfferedCourse/OfferedCourse";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  const offeredCourses = courses.filter(
    (course) => course.discount_status === true
  );

  return (
    <div className="courses-container">
      <div className="container my-4">
        <h2 className="container my-3 mb-5 ">Explore Our Courses</h2>
        <div className="course-box container">
          <div className="row g-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {courses.map((course) => (
              <Course key={course.id} details={course}></Course>
            ))}
          </div>
        </div>
      </div>
      <div className="side-bar my-4">
        <h2 className="bg-primary py-4 my-3 mb-5 text-light text-center rounded-5">
          Todays Offer
        </h2>
        <p className="text-center">
          Get Flat <b className="text-danger">30%</b> Discount
        </p>
        {offeredCourses.map((oc) => (
          <OfferedCourse key={oc.id} details={oc}></OfferedCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
