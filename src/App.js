import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import React, { useState } from "react";

function App() {
  const state = {
    courses: [{ name: "html" }, { name: "css" }, { name: "jQuery" }],
    current: "",
  };
  const [current, setCurrent] = useState(state.current);
  const [Courses, setCourses] = useState(state.courses);
  //update course
  const updateCourse = (e) => {
    setCurrent(e.target.value);
  };

  //add course
  const addCourse = (e) => {
    e.preventDefault();
    // let current = state.current;
    // let courses = state.courses;
    courses.push({ name: current });
    setCourses(Courses);
    setCurrent("");
    console.log("course add");
    console.log(current);
  };
  const { courses } = state;
  const courseList = courses.map((course, index) => {
    return <CourseList details={course} key={index} />;
  });
  return (
    <section className="App">
      <h2>Add course</h2>

      <CourseForm
        current={state.current}
        updateCourse={updateCourse}
        addCourse={addCourse}
      />
      <ul>{courseList}</ul>
    </section>
  );
}

export default App;
