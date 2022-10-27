import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      <div className="container my-4">
        <h2 className="text-center">Explore Our Courses</h2>
      </div>

      <div className="course-box container">
        <div className="row g-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {courses.map((course) => (
            <Course key={course.id} details={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
