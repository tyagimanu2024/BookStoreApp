import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions  justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className="badge badge-outline hover:text-pink-500">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
