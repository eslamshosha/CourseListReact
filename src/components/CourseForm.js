import React from "react";

const CourseForm = ({ addCourse, updateCourse, current }) => {
  return (
    <form onSubmit={addCourse}>
      <input type="text" value={current} onChange={updateCourse} />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
