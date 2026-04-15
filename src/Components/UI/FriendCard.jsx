import React from "react";
import { Link } from "react-router";

const FriendCard = ({ data }) => {
  const { picture, name, tags, status, id, days_since_contact } = data;
  let bgColor = ''
  if(status == "overdue"){
    bgColor = "bg-red-800" 
  }
  else if(status == 'on-track'){
    bgColor = "bg-green-900"
  }
  else {
    bgColor = 'bg-yellow-600 '
  }
  return (
    <Link
      to={`/${id}`}
      className="p-4 shadow  flex flex-col justify-center items-center space-y-3 rounded-2xl transition-transform duration-500 hover:scale-105"
    >
      <img className="mx-auto rounded-full" src={picture} alt="" />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-gray-500 font-medium"> {days_since_contact}d ago</p>
      <div className="flex justify-around gap-2 ">
        {tags.map((res, ind) => (
          <span
            key={ind}
            className="bg-green-100 rounded-full text-green-800 px-4  "
          >
            {res}
          </span>
        ))}
      </div>
      <span
        className={`text-white rounded-full text-center px-3 ${bgColor}`}
      >
        {status}
      </span>
    </Link>
  );
};

export default FriendCard;
