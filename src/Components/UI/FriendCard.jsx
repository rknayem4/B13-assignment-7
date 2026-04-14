import React from "react";

const FriendCard = ({ data }) => {
  const { picture, name, tags, status } = data;
  return (
    <div className="p-4 shadow max-w-80 flex flex-col justify-center items-center space-y-3 rounded-2xl ">
      <img className="mx-auto rounded-full" src={picture} alt="" />
      <h2 className="text-2xl font-semibold">{name}</h2>
      <div className="flex justify-around gap-2 ">
        {tags.map((res) => (
          <span className="bg-green-300 rounded-full text-green-800 px-4  ">{res}</span>
        ))}
      </div>
      <span className={`text-white rounded-full text-center px-3 ${status == "overdue" ? 'bg-red-800' : 'bg-green-900'}`}>{status}</span>
    </div>
  );
};

export default FriendCard;
