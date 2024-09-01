import Cards from "./Cards";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error :", error);
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-10 leading-10">
          Here we pride ourselves on offering high-quality, engaging reads that are worth every penny. Our paid books are handpicked for their outstanding storytelling, insightful content, and the sheer pleasure they bring to our readers. Whether you're treating yourself or looking for the perfect gift, our premium selection is sure to delight.

Indulge in the luxury of a great book today—because the best stories are the ones worth investing in.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration 300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
