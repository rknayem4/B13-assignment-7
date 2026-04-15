import React from "react";
import { Link } from "react-router";

const FriendCard = ({ data }) => {
  const { picture, name, tags, status, id } = data;
  return (
    <Link to={`/${id}`} className="p-4 shadow  flex flex-col justify-center items-center space-y-3 rounded-2xl transition-transform duration-500 hover:scale-105">
      <img className="mx-auto rounded-full" src={picture} alt="" />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <div className="flex justify-around gap-2 ">
        {tags.map((res, ind) => (
          <span key={ind} className="bg-green-300 rounded-full text-green-800 px-4  ">
            {res}
          </span>
        ))}
      </div>
      <span
        className={`text-white rounded-full text-center px-3 ${status == "overdue" ? "bg-red-800" : "bg-green-900"}`}
      >
        {status}
      </span>
    </Link>
  );
};

export default FriendCard;
