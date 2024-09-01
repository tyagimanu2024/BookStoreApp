import React from "react";
import Home from "./Home/Home";
import Course from "./components/Course";
import { Routes, Route } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/signup";
import Login from "./components/Login";
import Contact from "./Contact/Contact";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;
