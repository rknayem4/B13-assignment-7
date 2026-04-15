import React, { useContext, useState } from "react";
import { AppsContext } from "../../Context/AppsContext";
import TimeLineCard from "../UI/TimeLineCard";

const TimeLine = () => {
  const { friend } = useContext(AppsContext);
  const [value, setValue] = useState("default");
  const filteredData =
  value === "default"
  ? friend
  : friend.filter((item) => item.btn.toLowerCase() == value.toLowerCase());

  const [search, setSearch] = useState("");
      const searchedData = filteredData.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="min-h-screen container px-3 mx-auto my-12">
      <h2 className="text-4xl font-bold">TimeLine </h2>
      <div>
        <div className="flex justify-between items-center">
          <fieldset className="fieldset">
            <select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              defaultValue="default"
              className="select min-w-50"
            >
              <option value="default" selected disabled>
                Filter Timeline{" "}
              </option>
              <option value="Call">Call </option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>
          </fieldset>

          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By : ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Newest </a>
              </li>
              <li>
                <a>Oldest</a>
              </li>
            </ul>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {filteredData.length === 0 ? (
        <div className=" h-[30vh] content-center my-4 rounded-2xl shadow  text-center mx-12">
          <p>No data Found</p>
        </div>
      ) : (
        searchedData.map((data) => (
          <TimeLineCard key={data.id} data={data}></TimeLineCard>
        ))
      )}
    </div>
  );
};

export default TimeLine;
