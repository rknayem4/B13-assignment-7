import React, { useContext, useState } from "react";
import { AppsContext } from "../../Context/AppsContext";
import TimeLineCard from "../UI/TimeLineCard";

const TimeLine = () => {
  const { friend } = useContext(AppsContext);
  const [value, setValue] = useState("");
  const filteredData = value
    ? friend.filter((item) => item.btn.toLowerCase() == value.toLowerCase())
    : friend;
  return (
    <div className="min-h-screen container px-3 mx-auto my-12">
      <h2 className="text-4xl font-bold">TimeLine </h2>
      <div>
        <fieldset className="fieldset">
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            defaultValue="Pick a browser"
            className="select"
          >
            <option disabled={true} >Filter Timeline </option>
            <option value="Call">Call </option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </fieldset>
      </div>
      {filteredData.length === 0 ? (
        <div className=" h-[30vh] content-center my-4 rounded-2xl shadow  text-center mx-12">
          <p>No data Found</p>
        </div>
      ) : (
        filteredData.map((data) => <TimeLineCard key={data.id} data={data}></TimeLineCard>)
      )}
    </div>
  );
};

export default TimeLine;
