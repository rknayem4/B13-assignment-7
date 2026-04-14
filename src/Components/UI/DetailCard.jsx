import React from "react";
import { FiArchive } from "react-icons/fi";
import { LuMessageSquareMore, LuVideo } from "react-icons/lu";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";

const DetailCard = ({ friendData }) => {
  const {
    tags,
    picture,
    name,
    status,
    days_since_contact,
    goal,
    next_due_date,
  } = friendData;
  return (
    <div>
      <div className=" grid grid-cols-3 lg:grid-cols-5 grid-rows-3 gap-5 my-8 px-3 md:px-0 ">
        {/* profile  */}
        <div className="flex col-span-3 lg:col-span-2 row-span-2 px-3 flex-col justify-center items-center rounded shadow  space-y-1">
          <img className="rounded-full max-w-20" src={picture} alt="" />
          <h2 className="text-xl font-semibold">{name}</h2>
          <div className="flex justify-around gap-2 ">
            {tags.map((res, ind) => (
              <small
                key={ind}
                className="bg-green-300 rounded-full text-green-800 px-4  "
              >
                {res}
              </small>
            ))}
          </div>
          <span
            className={`text-white rounded-full text-center px-3 ${status == "overdue" ? "bg-red-800" : "bg-green-900"}`}
          >
            {status}
          </span>
          <p className="text-center text-gray-500">{friendData.bio}</p>
          <p>Preferred : {friendData.email}</p>
        </div>

        {/* day and date */}
        <div className="shadow  text-center p-4 rounded-2xl content-center ">
          <h3 className="md:text-3xl text-lx font-bold">
            {days_since_contact}
          </h3>
          <p className="text-gray-500">Days Since Contact</p>
        </div>
        <div className="shadow  text-center p-4 rounded-2xl content-center ">
          <h3 className="md:text-3xl text-lx font-bold">{goal}</h3>
          <p className="text-gray-500">Goal(Days)</p>
        </div>
        <div className="shadow  text-center p-4 rounded-2xl content-center ">
          <h3 className="md:text-3xl text-lx font-bold">{next_due_date}</h3>
          <p className="text-gray-500">Next Due</p>
        </div>

        <div className="col-span-3 flex justify-between items-center shadow rounded-2xl p-4">
          <div className=" space-y-3">
            <h3 className="text-2xl font-semibold">Relationship Goal</h3>
            <p>
              Connect every <span className="font-semibold"> {goal} Days</span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>

        {/* button  */}
        <div className="space-y-4 col-span-3 lg:col-span-2">
          <button className="btn w-full ">
            <RiNotificationSnoozeLine /> Snooze 2 Weeks{" "}
          </button>
          <button className="btn w-full">
            <FiArchive />
            Archive{" "}
          </button>
          <button className="btn w-full text-red-600">
            <RiDeleteBinLine /> Deleted{" "}
          </button>
        </div>

        <div className="space-y-4 col-span-3  shadow rounded-2xl p-4">
          <h4 className="font-semibold">Quick Check-IN</h4>
          <div className="grid grid-cols-3 gap-3">
            <button className="btn flex flex-col h-full p-2">
              <TbPhoneCall className="text-2xl" /> Call{" "}
            </button>
            <button className="btn flex flex-col h-full p-2">
              <LuMessageSquareMore className="text-2xl" /> Text{" "}
            </button>
            <button className="btn flex flex-col h-full p-2">
              <LuVideo className="text-2xl" /> Video{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
