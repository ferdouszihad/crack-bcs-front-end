import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="courses-container">
      <div className="container my-4">
        <h2 className="text-center">Explore Our Courses</h2>
        <div className="course-box container">
          <div className="row g-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {courses.map((course) => (
              <Course key={course.id} details={course}></Course>
            ))}
          </div>
        </div>
      </div>
      <div className="side-bar  my-4">
        <h2 className="text-center">Todays Offer</h2>
      </div>
    </div>
  );
};

export default Courses;
